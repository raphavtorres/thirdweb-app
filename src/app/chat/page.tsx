"use client";

import { useChat } from "ai/react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AppLayout } from "@/components/app-layout";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <AppLayout>
      <div className="flex h-screen flex-col p-4">
        <Card className="flex flex-1 flex-col">
          <ScrollArea className="flex-1 p-4">
            {messages.map((message: any) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="flex items-start gap-3 text-sm">
                  <Avatar>
                    <AvatarFallback>
                      {message.role === "user" ? "U" : "AI"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="font-medium">
                      {message.role === "user" ? "You" : "AI Assistant"}
                    </p>
                    <p className="text-muted-foreground">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
          <div className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Send me a word, expression or sentance to get grammar inputs and translations..."
                className="flex-1"
              />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}
