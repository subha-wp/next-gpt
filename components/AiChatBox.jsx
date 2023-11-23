"use client";
import React from "react";
import { useChat } from "ai/react";
import { IoIosSend } from "react-icons/io";

export default function AiChatBox() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="h-[90%] max-h-[750px] pt-6 border w-full px-2 overflow-y-auto space-y-2">
        <p className="bg-slate-100 py-1 px-2 text-[13px] rounded-md w-fit max-w-[80%]">
          Namaste 🙏 from WellHealth Ayurvedic!
          <br /> How Can I help You Today?
        </p>
        {messages.map((m) => {
          return (
            <div key={m.id} className="flex flex-col ">
              <div
                className={`${
                  m.role === "user"
                    ? "self-end bg-[#93d247] bg-opacity-40 "
                    : "bg-slate-100 "
                }  py-1 px-2 text-[13px] rounded-md w-fit max-w-[80%]`}
              >
                {m.role === "user" ? (
                  <p>{m.content}</p>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: m.content }}></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-center border items-center">
        <form
          onSubmit={handleSubmit}
          className="m-2 w-full space-x-2 items-center flex justify-center"
        >
          <input
            value={input}
            type="text"
            className="border rounded-md outline-none p-1 w-[80%]"
            placeholder="Type Your Message..."
            onChange={handleInputChange}
          />
          <button type="submit" className="border p-1 rounded-md bg-[#93d247]">
            <IoIosSend size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}
