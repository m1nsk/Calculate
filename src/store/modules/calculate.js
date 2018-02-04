// initial state
const state = {
  debtData: [
    {
      date: "2015/09/25",
      value: "700000",
      type: "debt"
    },
    {
      date: "2015/11/16",
      value: "160000",
      type: "repayment"
    },
    {
      date: "2015/12/12",
      value: "100000",
      type: "repayment"
    },
    {
      date: "2016/01/20",
      value: "440000",
      type: "repayment"
    },
    {
      date: "2016/02/12",
      value: "50000",
      type: "debt"
    },
    {
      date: "2016/04/08",
      value: "50000",
      type: "repayment"
    },
  ],
  debtData2: [
    {
      date: "2016/06/02",
      value: "100",
      type: "debt"
    },
    {
      date: "2016/10/2",
      value: "100000",
      type: "debt"
    },
    {
      date: "2016/11/14",
      value: "100000",
      type: "repayment"
    },
    {
      date: "2016/012/27",
      value: "100",
      type: "repayment"
    }
  ],
  debtOptions: {
    date: "",
    percents: ""
  },
}

// getters
const getters = {
  debtData: state => state.debtData2.sort((a,b) => new Date(a.date) - new Date(b.date)),
  debtOptions: state => state.debtOptions
}

// actions
const actions = {
}

// mutations
const mutations = {
  setCalcOptions (state, options) {
    state.debtOptions.date = options.date
    state.debtOptions.percents = options.percents
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
