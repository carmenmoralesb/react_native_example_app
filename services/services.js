import { API_KEY, endpoint, country, language } from '../config/config';

export async function services(category = 'general') {
    let articles = await fetch(`${endpoint}?language=${language}&category=${category}`, {
        headers: {
            'X-API-KEY': API_KEY
        }
    });

    let result = await articles.json();
    articles = null;

    return result.articles;
}