import Events from 'events'

export default ({ app }, inject) => {
  const events = new Events()
  events.setMaxListeners(Infinity)
  inject('events', events)
}

