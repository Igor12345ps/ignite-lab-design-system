import { Heading } from "./components/Heading/Heading";
import { Text } from "./components/Text/Text";
import { Logo } from "./Logo";
import { TextInput } from "./components/TextInput/TextInput";
import { Envelope, Lock } from "phosphor-react";
import "./styles/global.css";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Button } from "./components/Button/Button";

export function App() {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col text-center items-center justify-center text-gray-100">
      <header className="flex flex-col items-center space-y-4">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full text-left max-w-[80%] md:max-w-xs lg:max-w-sm mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size="md" className="font-semibold">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              placeholder="Digite seu email"
              type="email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text size="md" className="font-semibold">
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              placeholder="******"
              type="password"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>

        <footer className="flex flex-col items-center mt-4 gap-4">
          <Text size="sm" link linkHover="hover:text-gray-200" asChild>
            <a href="" className="text-gray-400">Esqueceu sua senha?</a>
          </Text>

          <Text size="sm" link linkHover="hover:text-gray-200" asChild>
            <a href="" className="text-gray-400">Não possui conta? Crie uma agora!</a>
          </Text>
        </footer>
      </form>
    </div>
  );
}
