// this is aliased in webpack config based on server/client build
import api from 'create-api'

const itemsCache = Object.create(null)

/**
 * 根据 id 获得 item
 * @param  {Number} id
 * @return {Promise}
 */
export function fetchItem (id) {
  return new Promise((resolve, reject) => {
    if (itemsCache[id]) {
      resolve(itemsCache[id])
    } else {
      api.child('item/' + id).once('value', snapshot => {
        const story = itemsCache[id] = snapshot.val()
        resolve(story)
      }, reject)
    }
  })
}

/**
 * 根据 ids 获得 items
 * @param  {Array} ids
 * @return {Promise}
 */
export function fetchItems (ids) {
  if (!ids || !ids.length) {
    return Promise.resolve([])
  } else {
    return Promise.all(ids.map(id => fetchItem(id)))
  }
}

function fetch (child) {
  return new Promise((resolve, reject) => {
    api.child(child).once('value', snapshot => {
      const val = snapshot.val()
      resolve(val)
    }, reject)
  })
}

/**
 * 根据 type 获取 ids
 * @param  {String} type
 * @return {Promise}
 */
export function fetchIdsByType (type) {
  return fetch(`${type}stories`)
}
