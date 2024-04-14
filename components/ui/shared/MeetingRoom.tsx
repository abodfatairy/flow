"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { LayoutList, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "../button";
import { useRouter, useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const router = useRouter();
  const [layout, setlLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition={"left"} />;
      default:
        return <SpeakerLayout participantsBarPosition={"right"} />;
    }
  };

  return (
    <section className=' relative h-screen w-full overflow-hidden pt-4 text-white'>
      <div className=' relative flex-center size-full'>
        <div className=' flex size-full max-w-[1000px] items-center justify-center'>
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            " show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className=' fixed bottom-0 flex-center flex-wrap w-full gap-4 '>
        <CallControls onLeave={() => router.push("/")} />
        <DropdownMenu>
          <div className=' flex items-center'>
            <DropdownMenuTrigger className=' rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
              <LayoutList
                size={20}
                className=' text-white'
              />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className=' border-dark-1 bg-dark-1 text-white'>
            {["Grid", "Speaker-left", "Speaker-right"].map((item, i) => (
              <div
                className=''
                key={i}
              >
                <DropdownMenuItem
                  className=' cursor-pointer text-2xl hover:bg-[#4c535b]  rounded'
                  onClick={() =>
                    setlLayout(item.toLocaleLowerCase() as CallLayoutType)
                  }
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className=' border-dark-1' />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton />
        <Button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className='rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
            <Users
              size={20}
              className=' text-white'
            />
          </div>
        </Button>
        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
