import { CalendarDays } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function Name() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link"><p className="text-3xl">@jason_xie</p></Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-slate-900 mb-3" side="top">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://yesitstsuki.carrd.co/assets/images/image10.jpg?v=724500c0" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white text-left">@jason_xie</h4>
            <p className="text-sm text-white text-left">
              Blabbering programmer with a keen eye for user experience.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70 text-white" />{" "}
              <span className="text-xs text-muted-foreground text-white">
                Started from 2018
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default Name;