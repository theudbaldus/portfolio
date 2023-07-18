import './globals.css';
import { Urbanist } from 'next/font/google';
import TopLinks from '@/components/TopLinks';
import BottomNavigator from '@/components/BottomNavigator';
import ToggleMenu from '@/components/ToggleMenu';
import Blob from '@/components/Blob';
import Background from '@/components/Background';
import MobileBlob from '@/components/MobileBlob';

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
    title: 'Thibault Thomas | Frontend Developer',
    description: 'Thibault Thomas Portfolio'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${urbanist.className} relative bg-darkBg overflow-hidden overscroll-none`}>
                <TopLinks />
                <ToggleMenu />
                {children}
                <Blob />
                <MobileBlob />
                <Background />
                <BottomNavigator />
            </body>
        </html>
    )
}
