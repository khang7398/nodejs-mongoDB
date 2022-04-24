import create from 'zustand';
import axios from 'axios';

type State = {
  fetch: (url: any) => void;
  data: {};
};

export const useStore = create<State>((set) => ({
  data: {},
  fetch: async (url: 'http://localhost:4000/auth/login') => {
    try {
      const res = await axios.post(url);
      set({ data: await res.data });
    } catch (err) {
      alert('data error');
    }
  },
}));
