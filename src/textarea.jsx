import React from "react";

export default function Textarea() {
  return (
    <div className="flex flex-col col-span-2">
      <label className="px-1 text-lg" htmlFor="message">Message</label>
      <textarea
        className="border border-gray-600 p-2 rounded-md"
        name="message"
        id="message"
        cols="15"
        rows="10"
        required
      ></textarea>
    </div>  
  );
}
