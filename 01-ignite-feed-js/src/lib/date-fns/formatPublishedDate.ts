import { format, formatDistanceToNow, formatISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const publishedDateFormatted = function (date: Date): string {
  return format(date, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });
};

export const publishedDateRelativeToNow = function (date: Date): string {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
};

export const dateTime = function (date: Date): string {
  return formatISO(date);
};
