package com.example.anagram;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public class WordGame {

 public String word;

	public WordGame()
	{
		
	}
	
	public String getword()
	{
		return word;
	}

	
	public List<String> Shuffledword(String currentword)
	{
		 List<String> letters = new ArrayList<String>();
		  System.out.println("");
		  for (int i= 0; i<currentword.length(); i++)
		  {letters.add( ""+currentword.charAt(i));
			  
		  }
		  Collections.shuffle(letters);
		  return letters;
	}
	
	public Boolean CompareWord(String currentword,String enteredword)
    {
		if (currentword.equals(enteredword))
		{
		return true;
		}
		
		else {
		return false;
		}
	
	}
	
	public String getPartialWord(int hint, String currentword)
	{
		String partialword = "";
	for (int i = 0; i<hint; i++)
	{
		partialword = partialword +currentword.charAt(i);
	}

	return partialword;
	}	
}
