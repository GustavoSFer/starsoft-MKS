import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../Pages/Home';

// Mock da API
const mockProducts = {
  products: [
    {
      id: 1,
      name: 'Iphone 11 128 GB',
      brand: 'Apple',
      description: 'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
      photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp',
      price: '5000.00',
      createdAt: '2023-10-30T16:25:01.093Z',
      updatedAt: '2023-10-30T16:25:01.093Z'
    },
  ],
};

// Mock da função fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProducts)
  })
);
describe('Verificando os Cards do produtos', () => {

    it('renders products from API', async () => {
    render(<Home />);


    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    expect(screen.getByText(/Grave vídeos 4K/i)).toBeInTheDocument();
    expect(screen.getByText(/5000.00/i)).toBeInTheDocument();
    });

    it('Verificando se os Cards são renderizados', () => {
      render(<Home />);
      const cards = screen.queryAllByRole('img');
      expect(cards).toHaveLength(1);
    });
  });