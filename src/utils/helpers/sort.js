import { ref, computed } from 'vue';
import { sliceArr } from '@/utils/helpers/helpers.js';
import { USER_PER_PAGE } from '@/constants/api.js';

export function useSort ({
    items = ref([]),
    itemsPerPageDefault = USER_PER_PAGE,
} = {}) {
    const currentPage = ref(0);
    const itemsPerPage = ref(itemsPerPageDefault);
    const descSort = ref(false);
    const activeSortKey = ref('');

    const slicedItems = computed(() => sliceArr([...items.value], itemsPerPage.value));
    const currentPageItems = computed(() => slicedItems.value[currentPage.value]);
    const pagesCount = computed(() => slicedItems.value.length);

    const sortActivate = key => {
        if (activeSortKey.value && activeSortKey.value === key) {
            descSort.value = !descSort.value;
            return;
        }

        descSort.value = false;
        activeSortKey.value = key;
    };

    return {
        itemsPerPage,
        slicedItems,
        currentPageItems,
        pagesCount,
        descSort,
        activeSortKey,
        currentPage,
        sortActivate,
    };
}
