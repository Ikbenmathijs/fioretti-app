import 'dart:convert';
import 'package:fioretti_app/main.dart';
import 'package:flutter/material.dart';

String dateTimeToString(DateTime dateTime) {
  return "${dateTime.hour}:${numWithTwoDigits(dateTime.minute)}";
}

String dateToString(DateTime date) {
  return "${date.day}-${date.month}-${date.year}";
}

String timeToString(DateTime time) {
  return "${numWithTwoDigits(time.hour)}:${numWithTwoDigits(time.minute)}";
}

String numWithTwoDigits(int number) {
  if (number < 10) {
    return "0$number";
  } else {
    return "$number";
  }
}

String monthToString(DateTime date) {
  return "${date.day} ${date.month} ${date.year}";
}
//String month = Utils.getMonthInLetters(date.month).substring(0, 3).toUpperCase();

String formatDateTime(DateTime dateTime) {
  return "${dateTime.day}-${dateTime.month}-${dateTime.year}";
}

String getMonthInLetters(int month) {
  switch (month) {
    case 1:
      return 'JAN';
    case 2:
      return 'FEB';
    case 3:
      return 'MAR';
    case 4:
      return 'APR';
    case 5:
      return 'MAY';
    case 6:
      return 'JUN';
    case 7:
      return 'JUL';
    case 8:
      return 'AUG';
    case 9:
      return 'SEP';
    case 10:
      return 'OCT';
    case 11:
      return 'NOV';
    case 12:
      return 'DEC';
    default:
      return '';
  }
}

String getErrorMessageFromBody(dynamic body) {
  try {
    Map<String, dynamic> json = jsonDecode(body);
    if (json.containsKey("message") && json["message"] is String) {
      return json["message"];
    }
  } finally {}

  if (body is String) {
    return body;
  }
  return "";
}

void showSnackBar(String message) {
  if (scaffoldMessengerKey.currentState != null) {
    scaffoldMessengerKey.currentState!.showSnackBar(SnackBar(
      content: Text(message),
      duration: const Duration(seconds: 10),
    ));
  }
}
