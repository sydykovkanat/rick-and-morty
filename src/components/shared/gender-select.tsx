import { Control } from 'react-hook-form';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui';
import { FormField } from '@/components/ui/form';

import { FiltersValues } from '@/hooks/use-filters';

interface Props {
	control: Control<FiltersValues>;
}

export function GenderSelect({ control }: Props) {
	return (
		<FormField
			control={control}
			name='gender'
			render={({ field }) => (
				<Select
					value={field.value}
					onValueChange={field.onChange}
					defaultValue={'null'}
				>
					<SelectTrigger className='flex-1'>
						<SelectValue placeholder='Gender' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='null'>All</SelectItem>
						<SelectItem value='female'>Female</SelectItem>
						<SelectItem value='male'>Male</SelectItem>
						<SelectItem value='genderless'>Genderless</SelectItem>
						<SelectItem value='unknown'>Unknown</SelectItem>
					</SelectContent>
				</Select>
			)}
		/>
	);
}
