import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import UsersItem from '@/components/items/UsersItem/index.vue';

describe('UsersItem', () => {
    it('"renders the image with a src, alt and a className "', async () => {
        const { getByAltText, findByText } = await render(UsersItem, {
            props: {
                imageAlt: 'img',
                imageSrc: '',
                className: 'users__item-img',
            },
        });
        const img = getByAltText('img');
        const className = findByText('users__item-img');

        expect(img).toBeDefined();
        expect(className).toBeDefined();
    });
});
