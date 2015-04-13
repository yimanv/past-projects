package com.example.anagram;



import android.app.Activity;

import android.content.Intent;

import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.TextView;


public class Instructions extends Activity {
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.instructions);
		
	
		TextView instructions = (TextView) findViewById(R.id.textView1);
		
		instructions.setText("Welcome to the Anagram game \n" +
		         "enter Player Information,\n"+
				"then select difficulty,\n" +
				"try to guess the complete word.\n"+
				"The hint will tell you beginning of the word.");
		
		Button proceed = (Button) findViewById(R.id.button1);
		proceed.setText("Proceed");
		proceed.setOnClickListener(new OnClickListener() {			
				public void onClick(View v) {
					
					
					
					startActivity(new Intent(getApplicationContext(), MainActivity.class));
					finish();
					
				}
			});
	
		
	}
	public void startAnimation()
	{TextView ins = (TextView) findViewById(R.id.textView1);
	
	Animation fade1 = AnimationUtils.loadAnimation(this,R.anim.fade_in);
	
   ins.startAnimation(fade1);
		
	}
	
	
}
