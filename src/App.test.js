import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { IMAGES_BATCH } from 'consts';
import * as helpers from 'helpers';

jest.mock('services/apiService.js');

describe('App', () => {
	describe('Initialize', () => {
		test('Should render app width correct batch size', async () => {
			const { container } = render(<App />);
			await waitFor(() => expect(container.querySelectorAll('.imagesContainer img').length).toEqual(IMAGES_BATCH));
		});
		
		test('Should set the initial layout', async () => {
			const { container } = render(<App />);
			await waitFor(() => {
				expect(container.querySelector('.columnLayout')).toBeFalsy()
			});
		});

		test('Should efresh images', async () => {
			render(<App />);
			const spy = jest.spyOn(helpers, 'pickRandom');
			screen.getByRole('button', {name: 'Refresh'}).click();
			await waitFor(() => expect(spy).toHaveBeenCalledTimes(2))
		});
	});
	
	describe('Edge cases', () => {
		test.todo('Should render error on api failure');
	})
})

