package com.example.anagram;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

public class Difficulty extends Activity{
	
	RadioGroup difficultyRadio;
	RadioButton diffRadioButton;
	
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.difficulty);
		
		difficultyRadio = (RadioGroup) findViewById(R.id.difficultyRadioGroup);
		Button buttonDifficulty = (Button) findViewById(R.id.difficultyButton);
		buttonDifficulty.setOnClickListener(new OnClickListener() {			
			public void onClick(View v) {
				Intent gameIntent = new Intent(Difficulty.this, Game.class);
				Bundle difficulty = new Bundle();
				int selectedDifficulty = difficultyRadio.getCheckedRadioButtonId();
				
				diffRadioButton = (RadioButton) findViewById(selectedDifficulty);
				difficulty.putString("difficulty",""+diffRadioButton.getText());
				gameIntent.putExtras(difficulty);
				startActivity(gameIntent);
				finish();
			}
		});
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
