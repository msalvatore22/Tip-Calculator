import { create } from 'zustand'

// need to bring in Math library to do some rounding and formatting

const calculateTipPerPerson = (bill, tipPercent, customTipPercent, people) => {
  let currentPercent = tipPercent !== 0 ? tipPercent : customTipPercent
  const percent = currentPercent / 100
  const result = (bill * percent) / Number(people)
  return result
}

const calculateTotalPerPerson = (bill, tipPerPerson, people) => {
  const totalBill = Number(bill) + (tipPerPerson * people)
  return totalBill / people
}

const useStore = create((set) => ({
  bill: '',
  tipPercent: 0,
  customTipPercent: '',
  people: 1,
  tipPerPerson: 0,
  totalPerPerson: 0,
  updateBill: (bill) => set(() => ({bill: bill})),
  updateTipPercent: (tipPercent) => set(() => ({tipPercent: tipPercent, customTipPercent: ''})),
  updateCustomTipPercent: (customTipPercent) => set(() => ({customTipPercent: customTipPercent, tipPercent: 0})),
  updatePeople: (people) => set(() => ({people: people})),
  updateTipPerPerson: () => set((state) => ({tipPerPerson: calculateTipPerPerson(state.bill, state.tipPercent, state.customTipPercent, state.people)})),
  updateTotalPerPerson: () => set((state) => ({totalPerPerson: calculateTotalPerPerson(state.bill, state.tipPerPerson, state.people)})),
  reset: () => set({ bill: 0, tipPercent: 0, people: 1, tipPerPerson: 0, totalPerPerson: 0 })
}))

export default useStore