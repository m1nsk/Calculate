export default function getPercents (transfer, options) {
  let result = []
  let transferIntervals = convertTransfers(transfer)
  for(let item of monthGenerator(transferIntervals[0].start, transferIntervals[transferIntervals.length - 1].end, options)){
    let total = 0
    for(let ti of transferIntervals) {
      if (inTransferArea(item.start, item.end, ti)) {
        total += countTotalInTransfer(item.start, item.end, ti, options)
      } else if (total > 0){
        break
      }
    }
    result.push({
      date: item.end,
      percents: total
    })
  }
  return result
}

function getPrevPayday(date, options) {
  return getPayDay(date.getFullYear(), date.getMonth() - 1, options.date);
}

function getCurrentPayday(date, options) {
  return getPayDay(date.getFullYear(), date.getMonth(), options.date);
}

function getPayDay (year, month, date) {
  let day = getDaysPerMonth(year, month)
  return new Date(year, month, day > date ? date : day)
}

function getDaysPerMonth (year, month) {
  return new Date(year, month + 1, 0).getDate()
}
function getPercentsPerDay (debt, year, percents) {
  return debt * percents / 100 / getDaysInYear(year)
}
function getDaysInYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 366 : 365
}

function convertTransfers(transfers) {
  let result = []
  let sum = 0
  for(let i = 0; i < transfers.length; i++) {
    sum += parseInt(transfers[i].value) * (transfers[i].type === 'debt' ? 1 : -1)
    if (transfers[i + 1] !== undefined) {
      result.push({
        value: sum,
        start: new Date(transfers[i].date),
        end: new Date(transfers[i + 1].date)
      })
    }
  }
  console.log(result, 'result')
  return result
}

function countTotalInTransfer(dateStart, dateEnd, transfer, options) {
  const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  let start = dateStart > transfer.start ? dateStart : transfer.start
  let end = dateEnd < transfer.end ? dateEnd : transfer.end
  let days = Math.round(Math.abs((start.getTime() - end.getTime())/(oneDay)))
  let percents = getPercentsPerDay(transfer.value, end.getFullYear(), options.percents)
  return days * percents
}

function inTransferArea(dateStart, dateEnd, transfer) {
  if (dateStart.getTime() <= transfer.end.getTime() && dateStart.getTime() >= transfer.start.getTime()
    || dateEnd.getTime() > transfer.start.getTime() && dateEnd.getTime() < transfer.end.getTime()
    || dateStart.getTime() < transfer.start.getTime() && dateEnd.getTime() > transfer.end.getTime())
    return true
  return false
}

function* monthGenerator(start, end, options) {
  let _start, _end
  if (start.getDate() <= options.date) {
    _start = new Date(start.getFullYear(), start.getMonth(), 1)
    _end = new Date(end.getFullYear(), end.getMonth(), 1)
  } else {
    _start = new Date(start.getFullYear(), start.getMonth() + 1, 1)
    _end = new Date(end.getFullYear(), end.getMonth() + 1, 1)
  }
  while(_start < _end) {
    yield {
      start: getPrevPayday(_start, options),
      end: getCurrentPayday(_start, options)
    }
    _start = new Date(_start.getFullYear(), _start.getMonth() + 1, 1)
  }
  yield {
    start: getPrevPayday(_start, options),
    end: end
  }
}
