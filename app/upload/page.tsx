"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UploadForm {
  category: string;
  images: FileList;
}

const page = () => {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const { register, handleSubmit, setValue, watch } = useForm<UploadForm>();

  const onSubmit = async (data: UploadForm) => {
    if (!data.category || !data.images || data.images.length === 0) {
      setMessage("Please select a category and choose images to upload.");
      return;
    }

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("category", data.category);
    Array.from(data.images).forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Images uploaded successfully!");
      } else {
        const errorData = await response.json().catch(() => ({}));
        setMessage(errorData.error || "Failed to upload images. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Upload Images</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <Select onValueChange={(value) => setValue("category", value)}>
            <SelectTrigger className="w-full max-w-xs">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weddings">Weddings</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="pre-weddings">Pre-weddings</SelectItem>
              <SelectItem value="contactHome">Contact Home</SelectItem>
              <SelectItem value="footer">Footer</SelectItem>
              <SelectItem value="heroBanner">Hero Banner</SelectItem>
              <SelectItem value="homecategories">Home Categories</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            {...register("images")}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <Button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload Images"}
        </Button>
      </form>

      {message && (
        <div
          className={`mt-4 p-4 rounded ${message.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default page;
