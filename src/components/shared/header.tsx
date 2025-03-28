import Image from 'next/image';
import Link from 'next/link';

export function Header() {
	return (
		<header className={'flex h-[60px] justify-center'}>
			<Link href={'/'} className={'flex items-center gap-2'}>
				<Image
					src={'/icon.svg'}
					alt={'logo icon'}
					width={32}
					height={32}
					priority
				/>

				<h1 className={'text-xl font-semibold flex items-center'}>
					Rick And Morty
				</h1>
			</Link>
		</header>
	);
}
