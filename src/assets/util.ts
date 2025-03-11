export function makeId(length = 6) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}

export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

export function delay(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function getDate(date: Date | undefined) {
  if (date) {
    const yyyy: number = date.getFullYear();
    let MM: number | string = date.getMonth() + 1;
    let dd: number | string = date.getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (MM < 10) {
      MM = "0" + MM;
    }

    return `${dd}/${MM}/${yyyy}`;
  }
}

export function getNumberAndCurrency(
  number: number,
  withFractionDigits = false,
  lang = "en",
  currency = "USD"
) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: withFractionDigits ? undefined : 0,
    maximumFractionDigits: withFractionDigits ? undefined : 0,
  }).format(number);
}

export function formatWhatsAppTime(date: Date): string {
  const now = new Date();

  // Check if the date is today
  const isToday = date.toDateString() === now.toDateString();

  if (isToday) {
    // Format as "HH:mm" if it's today
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } else {
    // Format as "dd/MM/yy" for past dates
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  }
}
