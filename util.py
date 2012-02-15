#!/usr/bin/env python

"""
Utility module.
"""

__author__    = "Carson McDonald <carson@ioncannon.net>"
__copyright__ = "Copyright 2012 Carson McDonald"
__license__   = "See LICENSE"

import random
import time
import re

CODELIST = list("aceghijlmopqrsuvwxyzACDEHIJKLMNOPQRSTUVWXYZ023456789bdfknFG1tB")

def next_code():
  """
  This function returns a unique id that contains alphanumeric
  characters and is only 6 characters long.
  """

  ci = int(time.time()) + random.randint(10000000000, 50000000000)
  s = ''
  base = len(CODELIST)
  while ci > 0:
    s += CODELIST[ci % base]
    ci /= base
  return s[::-1] 


def simple_sanitize(input):
  """
  This function removes everything from a string except for alphanumeric
  characters and a few others.
  """

  return re.sub(r'[^a-zA-Z0-9_~\\-\\.\\*]*', '', input)
