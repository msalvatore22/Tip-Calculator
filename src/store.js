import { create } from 'zustand'

// need to bring in Math library to do some rounding and formatting

const calculateTipPerPerson = (bill, tipPercent, people) => {
  const percent = tipPercent / 100
  const result = (bill * percent) / Number(people)
  return result
}

const calculateTotalPerPerson = (bill, tipPerPerson, people) => {
  const totalBill = Number(bill) + (tipPerPerson * people)
  return totalBill / people
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
  updateTotalPerPerson: () => set((state) => ({totalPerPerson: calculateTotalPerPerson(state.bill, state.tipPerPerson, state.people)})),
  reset: () => set({ bill: 0, tipPercent: 0, people: 1, tipPerPerson: 0, totalPerPerson: 0 })
}))

export default useStore