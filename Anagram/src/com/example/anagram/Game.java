package com.example.anagram;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.ExecutionException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.AsyncTask;
import android.os.Bundle;

import android.view.View;

import android.widget.Button;
import android.widget.EditText;

import android.widget.TextView;

public class Game extends Activity{
public int hints;
public String currentword;
public List<String> shuffledword;
public String partialword;
public int lives=10;
public int score;
public String difficulty;
public String age;
public String name;
public String educ;
public int count;


	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.game);
		
		TextView previous = (TextView) findViewById(R.id.previousWord);
		previous.setText("");
		TextView textDifficulty = (TextView) findViewById(R.id.difficultyText);
		Intent myLocalIntent= getIntent();
		Bundle mybundle = myLocalIntent.getExtras();
		 difficulty = mybundle.getString("difficulty");
		textDifficulty.setText(difficulty);
		if (difficulty.equals("Easy"))
		{
			hints = 3;
		}
		if (difficulty.equals("Medium"))
		{
			hints = 2;
		}
		
		if (difficulty.equals("Hard"))
		{
			hints = 1;
		}
		WordGame wordGame = new WordGame();
		AsyncTask<String, Void, String> word = new Words().execute("", "", "");
	    
		
		
	
		try {
			currentword= word.get();
			word.cancel(true);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ExecutionException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		shuffledword = wordGame.Shuffledword(currentword);
		TextView scrambledText = (TextView) findViewById(R.id.scrambledWordTextView);
		
		
	 partialword = wordGame.getPartialWord(hints, currentword);
	 TextView hintText = (TextView) findViewById(R.id.hintTextView);
	 scrambledText.setText(""+shuffledword);
	 hintText.setText("Hint:"+partialword);
	
		// TODO Auto-generated catch block
	
	
	
	Button buttonGuess = (Button) findViewById(R.id.guessButton);
	buttonGuess.setOnClickListener(new MessageClickListener());
	
	
}

private class MessageClickListener implements View.OnClickListener{

	@Override
	public void onClick(View arg0) {
		
		EditText textAnswer = (EditText) findViewById(R.id.answerEditText);
		 TextView hintText = (TextView) findViewById(R.id.hintTextView);
		 Button buttonGuess = (Button) findViewById(R.id.guessButton);
		 TextView scrambledText = (TextView) findViewById(R.id.scrambledWordTextView);
		 TextView previous = (TextView) findViewById(R.id.previousWord);
		if (currentword.equals(textAnswer.getText().toString()))
		{
			score= score +5;
			
			WordGame wordGame = new WordGame();
			AsyncTask<String, Void, String> word = new Words().execute("", "", "");
		    
			
			
		
			try {
				currentword= word.get();
				word.cancel(true);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (ExecutionException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			shuffledword = wordGame.Shuffledword(currentword);
			
			
		 partialword = wordGame.getPartialWord(hints, currentword);
		
		 scrambledText.setText(""+shuffledword);
		 hintText.setText("Hint:"+partialword);
		 scrambledText.setText(""+shuffledword);
		
		
		}
		
		
		
		
		else
		{
			lives = lives -1;
			if (lives == 0)
			{
				previous.setText("Previous word:"+currentword);
				
				textAnswer.setVisibility(View.INVISIBLE);
				
				buttonGuess.setVisibility(View.INVISIBLE);
				hintText.setVisibility(View.INVISIBLE);
				
				TextView textDifficulty = (TextView) findViewById(R.id.difficultyText);
				 textDifficulty.setText("You have lost on "+difficulty+"\n");
				 SharedPreferences sharedPreferences = getSharedPreferences("info.txt", Context.MODE_WORLD_READABLE);
				 //SharedPreferences sharedPreferences = getPreferences(MODE_PRIVATE);
				 SharedPreferences.Editor editor = sharedPreferences.edit();
				
				 String information= sharedPreferences.getString("inf", "");
				
				 information = information + " score:"+ score+ "\n";
				 editor.putString("inf",information);// Add values with method putString()
				 
				 editor.commit();
					
				  
				    scrambledText.setText("Your score is"+score+"\n scores of other players below\n"+information);
				   
				    Timer timer = new Timer();
				    timer.schedule(new TimerTask() {

				       public void run() {

				    	   finish();
				          

				       }

				    }, 20000);   
				 
				 }
				
			
			
			
			else {
				
				previous.setText("Previous word:"+currentword);
				
				WordGame wordGame = new WordGame();
			AsyncTask<String, Void, String> word = new Words().execute("", "", "");
		    
			
			
			
			try {
				currentword= word.get();
				word.cancel(true);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (ExecutionException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			shuffledword = wordGame.Shuffledword(currentword);
			
			
			
		 partialword = wordGame.getPartialWord(hints, currentword);

		 scrambledText.setText(""+shuffledword);
		 hintText.setText("Hint:"+partialword);
		
			}
		}
		
	
	
		
	}
	
}

protected class Words extends AsyncTask<String, Void, String> {
    protected String doInBackground(String... urls) {

    String responseStr = null;
    String []words;
	Random rdm = new Random();
	int rand = rdm.nextInt(26);
	char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
	
	String myUri = "http://www.wordbyletter.com/words_starting_with.php?q="+ alphabet[rand];
    
        DefaultHttpClient httpClient = new DefaultHttpClient();
        HttpGet get = new HttpGet(myUri);
        HttpResponse httpResponse = null;
		try {
			httpResponse = httpClient.execute(get);
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        HttpEntity httpEntity = httpResponse.getEntity();
        try {
			responseStr = EntityUtils.toString(httpEntity);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
   

    words =responseStr.split(",");

    List<String> wordlist = new ArrayList<String>();
    
	  
	   for(String w : words)
	   {
		   
		 
		   if(w.startsWith(" ") && w.length() >4)
		   { 
			wordlist.add(w);
		   }
		   else 
		   {
			   
		   }
	   }
	
	  Collections.shuffle(wordlist);
	  String currentword = "";		 
	  for(String w : wordlist)
	  {
		  if (w.trim().startsWith(""+alphabet[rand]))
		  {
		   currentword = w.trim();
		  }
		  break;
	  }
	 
	  
	  
	return currentword;

    }

    public String getWord(){
    
    	return currentword;
    }
}


}
	
