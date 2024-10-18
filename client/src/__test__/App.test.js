/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Customizable News Aggregator and checks for articles', async () => {
    render(<App />);

    const titleElement = screen.getByText(/Customizable News Aggregator/i);
    expect(titleElement).toBeInTheDocument();

    const loadingElement = screen.getByText(/Loading articles.../i);
    expect(loadingElement).toBeInTheDocument();

    const articlesElement = await screen.findByText(/No articles available/i);
    expect(articlesElement).toBeInTheDocument();
});
