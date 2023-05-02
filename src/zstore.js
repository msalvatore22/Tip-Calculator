import { create } from 'zustand'

const calculateTipPerPerson = (bill, tipPercent, people) => {
  return (bill * tipPercent) / people
}

const calculateTotalPerPerson = (bill, tipPercent, people) => {
  return bill + (bill * tipPercent) / people
}

const useStore = create((set) => ({
  bill: 0,
  tipPercent: 0,
  people: 1,
  tipPerPerson: 0,
  totalPerPerson: 0,
  updateBill: (bill) => set(() => ({bill: bill})),
  updateTipPercent: (tipPercent) => set(() => ({tipPercent: tipPercent})),
  updatePeople: (people) => set(() => ({people: people})),
  updateTipPerPerson: () => set((state) => ({tipPerPerson: calculateTipPerPerson(state.bill, state.tipPercent, state.people)})),
  updateTotalPerPerson: () => set((state) => ({tipPerPerson: calculateTotalPerPerson(state.bill, state.tipPercent, state.people)})),
  reset: () => set({ bill: 0, tipPercent: 0, people: 1, tipPerPerson: 0, totalPerPerson: 0 })
}))

export default useStore