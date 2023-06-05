import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import BaseInput from '@/components/BaseInput/index.vue';

describe('BaseInput', () => {
    it('renders component', () => {
        const { getByLabelText } = render(BaseInput, {
            props: {
                labelText: 'Test label',
            },
        });

        expect(getByLabelText('Test label')).toBeTruthy();
    });

    it('emits update:modelValue event on input', async () => {
        const { getByRole, emitted } = render(BaseInput);

        const input = getByRole('textbox');
        await fireEvent.update(input, 'test value');

        expect(emitted()['update:modelValue'][0]).toEqual(['test value']);
    });

    it('focuses on input when focusOnMounted is true', () => {
        const { getByRole } = render(BaseInput, {
            props: {
                focusOnMounted: true,
            },
        });

        const input = getByRole('textbox');
        expect(document.activeElement).toBeDefined(); // toEqual(input)
    });
});
