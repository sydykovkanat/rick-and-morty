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

export function StatusSelect({ control }: Props) {
	return (
		<FormField
			control={control}
			name='status'
			render={({ field }) => (
				<Select
					value={field.value}
					onValueChange={field.onChange}
					defaultValue={'null'}
				>
					<SelectTrigger className='flex-1'>
						<SelectValue placeholder='Status' />
					</SelectTrigger>

					<SelectContent>
						<SelectItem value='null'>All</SelectItem>
						<SelectItem value='alive'>Alive</SelectItem>
						<SelectItem value='dead'>Dead</SelectItem>
						<SelectItem value='unknown'>Unknown</SelectItem>
					</SelectContent>
				</Select>
			)}
		/>
	);
}
