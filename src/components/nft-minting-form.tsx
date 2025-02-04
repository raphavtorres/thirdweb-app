"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  image: z.instanceof(File).optional(),
});

export default function NFTMintingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Here you would typically:
      // 1. Upload the image to IPFS
      // 2. Create metadata and upload to IPFS
      // 3. Call your smart contract to mint the NFT
      console.log(values);
      form.reset();
      setPreview("");
    } catch (error) {
      console.error("Error minting NFT:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="rounded-lg border p-4">
      <h2 className="mb-4 text-xl font-semibold">Create NFT</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NFT Name</FormLabel>
                <FormControl>
                  <Input placeholder="Weekly Champion Trophy" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Description of the NFT..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field: { value, ...field } }) => (
              <FormItem>
                <FormLabel>NFT Image</FormLabel>
                <FormControl>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex h-64 w-64 items-center justify-center rounded-lg border border-dashed">
                      {preview ? (
                        <Image
                          src={preview || "/placeholder.svg"}
                          alt="NFT Preview"
                          width={256}
                          height={256}
                          className="rounded-lg object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center">
                          <ImageIcon className="mb-2 h-8 w-8 text-gray-400" />
                          <span className="text-sm text-gray-500">
                            No image selected
                          </span>
                        </div>
                      )}
                    </div>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="max-w-[256px]"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Upload an image for your NFT (PNG, JPG, GIF)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create NFT"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
