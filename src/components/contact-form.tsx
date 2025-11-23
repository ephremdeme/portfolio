"use client";

import * as React from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  project: z.string().min(5),
  budget: z.string().optional(),
  message: z.string().min(10),
});

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const parseResult = schema.safeParse(payload);
    if (!parseResult.success) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(parseResult.data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Failed to submit contact request", error);
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="name" placeholder="Name" required />
        <Input type="email" name="email" placeholder="Email" required />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="company" placeholder="Company" />
        <Input name="budget" placeholder="Budget / Engagement" />
      </div>
      <Input name="project" placeholder="What problem are we solving?" required />
      <Textarea name="message" placeholder="Tell me more about timelines, context, or stack" rows={4} required />
      <Button type="submit" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Sending..." : status === "success" ? "Message sent" : "Send message"}
      </Button>
      {status === "error" && <p className="text-sm text-rose-400">Couldn’t deliver—check fields or try emailing directly.</p>}
    </form>
  );
}
