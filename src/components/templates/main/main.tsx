import { Description, Logo, Title, Wrapper } from '@/components'
import { Illustration } from '@/components/atoms/illustration'

export interface MainProps {
  title: string
  description: string
}

export const Main = ({ title, description }: MainProps) => {
  return (
    <Wrapper>
      <Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
        width={384}
        height={0}
        className="mb-8"
      />
      <Title className="mb-2">{title}</Title>
      <Description>{description}</Description>
      <Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
        width={480}
        height={0}
        className="mt-12"
      />
    </Wrapper>
  )
}
