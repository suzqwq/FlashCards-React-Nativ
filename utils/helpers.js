import { AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'
import { formatData } from './decks'

const GETDATA_KEY='FlashCards:decks'
const NOTIFICATION_KEY = 'Flashcards:notifications'

export function saveDeckTitle(title) {
	return AsyncStorage.mergeItem(GETDATA_KEY, JSON.stringify({
		[title]:{title: title}
		 }))
};

export function getDecks(){
	//AsyncStorage.removeItem(GETDATA_KEY)
	  return AsyncStorage.getItem(GETDATA_KEY)
	 .then(formatData)
	}

export function addCardToDeck(title, card) {
	let q=[]
	q.push(card)
    AsyncStorage.getItem(GETDATA_KEY).then((result) => {
        let decks = JSON.parse(result)
        decks[title].question ? decks[title].question=[...decks[title].question, card] : decks[title].question=q
        AsyncStorage.mergeItem(GETDATA_KEY, JSON.stringify(decks))
    })
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
  .then((Notifications.cancelAllScheduledNotificationsAsync))
}


function createNotification (){
	return {
		title: 'Study reminder',
		body: "Don't forget to study today",
		ios: {
			sound: true
		},
		android: {
			sound: true,
			priority: 'high',
			sticky: false,
			vibrate: true
		}
	}
}

export function setLocalNotification (){
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then((data) => {
    if(data ===null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({status}) => {
        if (status === 'granted'){
          Notifications.cancelAllScheduledNotificationsAsync()

          let tommorow=new Date()
          tommorow.setDate(tommorow.getDate() + 1)
          tommorow.setHours(20)
          tommorow.setMinutes(0)

          Notifications.scheduleLocalNotificationAsync(

            createNotification(),
            {
              time: tommorow,
              repeat: 'day'
            })
          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
        }
      })
    }
  })
}

