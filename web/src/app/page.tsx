import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, Copy, Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div>
        <Button type="submit">
          Enviar
        <ArrowRight />
        </Button >
        <IconButton type="button">
          <Copy />
        </IconButton>
        <InputRoot>
          <InputIcon>
            <Mail size={20}/>
          </InputIcon>
          <InputField type="email" placeholder="Digite seu email" />
        </InputRoot>
      </div>
    </main>
  )
}
