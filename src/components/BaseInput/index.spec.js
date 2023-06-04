import { describe, it } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import BaseInput from '@/components/BaseInput/index.vue';

describe('BaseInput', () => {
    it('properly handles v-model', async () => {
        const { getByLabelText } = render(BaseInput, {
            props: {
                placeholder: 'Search login...',
                labelText: 'Git',
                type: 'text',
            },
            slots: {
                label: `<label for="text">Git</label>`,
            },
        });
        getByLabelText('Git');
        await fireEvent.update(getByLabelText('Git'));
    });
});
