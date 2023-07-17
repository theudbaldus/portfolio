import tapatshoes from "../public/assets/tapatshoes.webp";
import sippin from "../public/assets/sippin.webp";
import mastersPieces from "../public/assets/masters-pieces.webp";
import clonemaster from "../public/assets/clonemaster.webp";

export const worksData = [
    {
        id: "tapatshoes",
        name: "Tapatshoes",
        image: tapatshoes,
        color: "#69A1DF",
        type: "Client work",
        description: "An E-Commerce website I built for a French company specialized in sneakers retail. I began to work on this project early in my learning path, giving me the opportunity to learn a lot.",
        techStack: [
            "Next 13",
            "Sanity",
            "Stripe",
            "Paypal",
            "Auth0",
            "Nodemailer",
            "Framer Motion",
            "Tailwind CSS"
        ],
        link: "https://tapatshoes-next13.vercel.app/"
    },
    {
        id: "sippin",
        name: "Sippin",
        image: sippin,
        color: "#3B82F6",
        type: "Personnal project",
        description: "Have you ever wanted to drink something different at home with friends but never knew what to choose ? Well, I did. I built this app to learn to use APIs and take my first steps with React Three. Don't drink too much though, it should remain a pleasure and not a problem !",
        techStack: [
            "React",
            "Vite",
            "React Three",
            "Framer Motion",
            "Tailwind CSS"
        ],
        link: "https://sippin.netlify.app/"
    },
    {
        id: "masters-pieces",
        name: "Master's Pieces",
        image: mastersPieces,
        color: "#9F894A",
        type: "Personnal project",
        description: "I came across this Dribbble post showing a gallery of NFTs based on classical paintings by Michelangelo, among others, since I am fascinated by this artist's work, I wanted to showcase his top five works, paintings and sculptures. It is a really simple project, nothing really fancy but it gave me the opportunity to work with exit and entry animations on image change.",
        techStack: [
            "React",
            "Vite",
            "Framer Motion",
            "Tailwind CSS"
        ],
        link: "https://masterspieces.netlify.app/"
    },
    {
        id: "clonemaster",
        name: "Clonemaster",
        image: clonemaster,
        color: "#5EC660",
        type: "Personnal project",
        description: "Being an active learner of foreign languages, I have used Clozemaster for a long time. I wanted to make a clone of one of their main features, which is the fill in the blanks quiz, testing vocabulary in context. I made a French quiz so you will probably make the incorrect counter go to the moon if you don't know the language yet. Time to learn some vocabulary !",
        techStack: [
            "Plain Javascript",
            "Vite",
            "HTML",
            "CSS"
        ],
        link: "https://clonemaster.netlify.app/"
    }
];