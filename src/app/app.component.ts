import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AIAssistViewModule, AIAssistViewComponent,
  PromptRequestEventArgs, ToolbarSettingsModel
 } from 
'@syncfusion/ej2-angular-interactive-chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AIAssistViewModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('aiAssistViewComponent')
  public aiAssistViewComponent !: AIAssistViewComponent;
  public toolbarSettings: ToolbarSettingsModel = {
    items: [
      { iconCss: 'e-icons e-refresh', align: 'Right' }
    ]
  };
  public promptSuggestions: string[] = [
    "How do I prioritize my tasks?",
    "How can I improve my time management skills?"
  ];
  public prompts = [
    {
    prompt: "How do I prioritize my tasks?",
    response: `Prioritize tasks by urgency and impact: tackle high-impact 
    tasks first, delegate when possible, and break large tasks into smaller 
    steps. For more assistance, feel free to ask—I’m here to help!`
    },
    {
    prompt: "How can I improve my time management skills?",
    response: `To improve time management skills, try setting clear goals, 
    using a planner or digital tools, prioritizing tasks, breaking tasks 
    into smaller steps, and minimizing distractions. Regularly review and 
    adjust your approach for better efficiency.`
    }
  ];
  public onPromptRequest = (args: PromptRequestEventArgs) => {
    setTimeout(()=>{
    let foundPrompt = 
     this.prompts.find((promptObj) => promptObj.prompt === args.prompt);
    let defaultResponse = 
     `For real-time prompt processing, connect the AI AssistView component 
     to your preferred AI service, such as OpenAI or Azure Cognitive Services. 
     Ensure you obtain the necessary API credentials to authenticate and enable 
     seamless integration.`;
     this.aiAssistViewComponent.addPromptResponse(
      foundPrompt ? foundPrompt.response : defaultResponse
     );
    }, 2000);
  };
  title = 'myangularapp';
}


