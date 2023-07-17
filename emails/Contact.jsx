import { Html, Head, Body, Container, Tailwind, Heading, Text, Hr } from "@react-email/components";

export function ContactMail({ data }) {
    return (
        <Html>
            <Head />
            <Tailwind>
                <Body className="text-sans">
                    <Container className="px-4 py-8 border border-slate-700 mx-auto">
                        <Heading className="text-base font-bold text-black">{data?.object}</Heading>
                        <Text className="text-base">{data?.name}</Text>
                        <Text className="text-base">{data?.mail}</Text>
                        <Text className="text-base text-[#2C445E]">{data?.message}</Text>

                        <Hr />

                        <Text className="text-base text-[#2C445E]">Sent from portfolio contact form</Text>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};