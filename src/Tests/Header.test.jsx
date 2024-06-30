import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Components/Header';
import { ProductsData } from './Mock/ProductsData';


describe('Header Component', () => {
    it('Verifica se existe o texto "MKS" em tela', () => {
        render(<Header carrinho={ProductsData} />);

        expect(screen.getByText('MKS')).toBeInTheDocument();
    });
    
    it('Verifica se existe o texto "Sistemas" em tela', () => {
        render(<Header carrinho={ProductsData} />);

        expect(screen.getByText('Sistemas')).toBeInTheDocument();
    });

    it('Verifica se existe o botão do carrinho em tela', () => {
        render(<Header carrinho={ProductsData} />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

});
