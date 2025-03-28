import Image from 'next/image';
import Link from 'next/link';

export function Header() {
	return (
		<header className={'flex flex-col mb-4 gap-y-1 justify-center'}>
			<Link href={'/'} className={'flex items-center justify-center gap-2'}>
				<Image
					src={'/icon.svg'}
					alt={'logo icon'}
					width={32}
					height={32}
					priority
				/>
				<h1 className={'text-xl font-semibold'}>Rick And Morty</h1>
			</Link>

			<p className={'text-sm text-muted-foreground text-center'}>
				Find your favorite characters Rick and Morty
			</p>
		</header>
	);
}
