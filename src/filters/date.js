export default (value) => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], // which local will be the default
    { month: 'short', // how to output the date
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
  )
}

// This should give us a nicely formatted date. For this to work we need t0
// register it in the main.js file.
// import DateFilter from '@/filters/date'
