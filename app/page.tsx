import clsx from "clsx"
// import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import styles from "@/app/ui/home.module.css"
import { inter, lusitana } from "./ui/fonts"
import Image from "next/image"

export default function Home() {
	const status: string = "paid"
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			{/* <p className={`${lusitana.className}`}>hello</p> */}
			{/* Add Hero Images Here */}
			<Image
				src="/hero-desktop.png"
				width={1920}
				height={1080}
				className="hidden md:block"
				alt="Screenshots of the dashboard project showing desktop  version"
			/>
			<Image
				src="/hero-mobile.jpg"
				width={560}
				height={620}
				className="block md:hidden"
				alt="Screenshot of the dashboard project showing mobile version"
			/>
			{/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
				<div
					className={clsx(styles.shape, {
						"bg-red-700 ": status == "pending",
						"bg-blue-700": status == "paid",
					})}
				/>
			
			</main> */}
		</div>
	)
}
