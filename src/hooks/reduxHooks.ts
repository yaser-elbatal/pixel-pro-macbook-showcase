
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import type { AppDispatch } from '@/store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
