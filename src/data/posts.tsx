import React from "react";
import {
  Divider,
  Callout,
  Emphasis,
  SectionHeading,
  Paragraph,
  LeadText,
} from "@/components/BlogContent";

export type Category = "Neuroscience" | "Movement" | "Breathwork";

export const CATEGORY_COLORS: Record<Category, string> = {
  Neuroscience: "#22c55e",
  Movement: "#3b82f6",
  Breathwork: "#a855f7",
};

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  date: string;
  readTime: string;
  excerpt: string;
  content: React.ReactNode;
}

export const posts: BlogPost[] = [
  {
    slug: "hacking-the-human-os",
    title: "Hacking the Human OS",
    subtitle: "Exploring the patterns within",
    category: "Neuroscience",
    date: "March 16, 2026",
    readTime: "15 min read",
    excerpt:
      "You are not broken. You are patterned. What most people call a flaw is often a loop, rehearsed until it feels like fate.",
    content: (
      <>
        <LeadText>You are not broken.</LeadText>
        <LeadText>You are patterned.</LeadText>

        <Paragraph>
          What most people call a flaw is often a loop, rehearsed until it feels
          like fate. A thought sparks chemistry. Chemistry shapes sensation.
          Sensation recruits the next thought. The circuit closes. The body
          learns the pattern, then guards it as if it were survival.
        </Paragraph>

        <Emphasis>This is the first truth.</Emphasis>

        <Paragraph>
          Change does not begin with shame. It begins with diagnosis. A bad habit
          is not a sin. It is legacy code, once useful, now expensive. The task
          is not self punishment. The task is recoding.
        </Paragraph>

        <Divider />

        <SectionHeading>The body is not a pile of parts.</SectionHeading>

        <Paragraph>
          It is a living stack. Breath. Vision. Jaw. Rib cage. Pelvis. Heel.
          Attention. Memory. Chemistry. Motion. Each layer edits the next. What
          feels local is often systemic. Tight neck. Flat breath. Jaw tension.
          Back pain. Restless mind. They do not arrive alone. They travel in
          formation.
        </Paragraph>

        <Callout>
          So the aim is not a better pose. The aim is optionality.
        </Callout>

        <Paragraph>
          A healthy system can shift states. It can exhale fully. It can sense
          the ground. It can alternate sides. It can produce force without panic,
          rest without collapse, and return to calm without bargaining. That is
          not posture. That is freedom.
        </Paragraph>

        <Divider />

        <SectionHeading>Neuroplasticity makes the rewrite possible.</SectionHeading>

        <Paragraph>
          The brain is not fixed hardware. It is adaptive tissue. It changes with
          repetition, salience, sensation, and consequence. Thought installs the
          pattern. Action proves it. Repetition insulates it. What fires together
          wires together. What is sensed with precision wires with depth.
        </Paragraph>

        <Emphasis>This is why force fails.</Emphasis>

        <Paragraph>
          Most people try to change themselves with commands. Stand taller.
          Stretch harder. Brace more. Stop the habit. Push through. None of that
          matters if the nervous system still trusts the old map. The body does
          not organize around your intentions. It organizes around the signals it
          believes.
        </Paragraph>

        <Callout>The old road wins because it is paved.</Callout>

        <Divider />

        <SectionHeading>Measure first.</SectionHeading>

        <Paragraph>
          No system improves without telemetry. Track mood, focus, urge strength,
          sleep onset, pain, breath quality, light exposure, stimulants, steps,
          and bedtime consistency. Numbers humble fantasy. They reveal drift
          before collapse. They show whether the body is adapting or merely
          enduring.
        </Paragraph>

        <Emphasis>Progress unseen is myth.</Emphasis>

        <Divider />

        <SectionHeading>Sleep matters here.</SectionHeading>

        <Paragraph>
          Sleep is not idleness. It is maintenance. Wakefulness builds pressure
          for descent. Light sets the clock. Deep sleep clears debris and
          consolidates learning. Dream sleep softens the sting of memory while
          preserving the lesson. Sleep debt turns small stressors into false
          emergencies. An exhausted brain becomes a prophet of threat.
        </Paragraph>

        <Divider />

        <SectionHeading>Breath matters next.</SectionHeading>

        <Paragraph>
          Breathing is not a wellness accessory. It is the control panel. Nasal
          breathing stabilizes pressure, filters air, improves gas exchange, and
          favors calmer states. Mouth breathing often leaks tension into the
          whole structure. The breath is both mirror and lever. It reveals the
          state, then changes it.
        </Paragraph>

        <Divider />

        <SectionHeading>Neutrality is not a pose.</SectionHeading>

        <Paragraph>
          Neutrality is a sensory event. It is the nervous system's ability to
          know where it is in space without leaning on compensation. It is the
          quiet recognition of heel, hamstring, inner thigh, oblique, rib
          position, tongue, airway, and horizon. When those signals sharpen, tone
          changes. When tone changes, position changes. When position changes,
          movement returns.
        </Paragraph>

        <Emphasis>The body listens before it moves.</Emphasis>

        <Divider />

        <SectionHeading>That is the blind spot.</SectionHeading>

        <Paragraph>
          Most people chase output. Pain. Tightness. Posture. Performance. They
          ignore the state that produces the output. Yet state is upstream.
          Chemistry, breath, sensory input, and positional awareness shape every
          downstream act. Change the state and mechanics follow. Change the map
          and strength has somewhere to land.
        </Paragraph>

        <Callout>
          A muscle that feels tight is often busy, not short. It is holding a
          strategy together.
        </Callout>

        <Paragraph>
          Stretch it without changing the strategy and the system protects
          harder. Inhibition matters more than aggression. The art is not to
          overpower the pattern. The art is to make the pattern unnecessary.
        </Paragraph>

        <Divider />

        <SectionHeading>Human structure is asymmetrical by design.</SectionHeading>

        <Paragraph>
          The right diaphragm is larger. The liver changes the landscape. The
          heart changes the left. This asymmetry gives us rotation, sequence, and
          power. It also creates bias. Many bodies drift into a familiar
          rightward strategy. The ribs stay lifted. The neck stays alert. The
          pelvis loses options. One side becomes home. The other becomes theory.
        </Paragraph>

        <Callout>
          There is nothing wrong with asymmetry. There is something costly about
          getting trapped in one half of the gait cycle.
        </Callout>

        <Paragraph>
          Right stance is not the enemy. Living there is. A body that cannot
          alternate is a body that cannot recover. The real objective is not
          posture. It is alternation. The ability to move from right to left and
          back again with clean pressure, clean breath, and clean timing.
        </Paragraph>

        <Emphasis>That changes everything.</Emphasis>

        <Divider />

        <SectionHeading>The reset point is not the inhale.</SectionHeading>

        <Paragraph>
          It is the end of the breath out. When the exhale finishes, the ribs
          settle. The abdominals organize. The diaphragm regains shape. The
          nervous system receives a different message. It can stop climbing
          upward into the neck. It can stop solving gravity with the back. It can
          stop treating every moment like preparation for impact.
        </Paragraph>

        <Emphasis>Exhale first.</Emphasis>

        <Paragraph>
          When the rib cage stays lifted, the diaphragm loses leverage. The neck
          takes over. The jaw hardens. The chest stays on. The psoas holds the
          spine in readiness. People call this tightness. It is closer to
          unresolved preparation.
        </Paragraph>

        <Divider />

        <SectionHeading>The neck tells on the trunk.</SectionHeading>

        <Paragraph>
          Jaw tension, headaches, TMJ symptoms, clavicle compression, shoulder
          impingement, visual strain, and balance changes often sit downstream
          from a deeper failure of rib cage and pelvic orientation. The SCM gets
          loud because the system is searching for air and stability above.
          Treating the neck can help. Repositioning the trunk changes the source
          code.
        </Paragraph>

        <Divider />

        <SectionHeading>The senses drive the whole thing.</SectionHeading>

        <Paragraph>
          Posture is not bones stacked in silence. Posture is orientation. The
          body turns toward what the brain deems urgent. Vision narrows and the
          spine extends. The bite shifts and the neck stiffens. The heel loses
          contact and the pelvis drifts. The organism keeps asking one question.
          Safe enough or not.
        </Paragraph>

        <Emphasis>That question governs shape.</Emphasis>

        <Paragraph>
          This is why the left heel matters. Why molar contact matters. Why
          peripheral vision matters. They are not tricks. They are votes. Each
          one tells the brain it can downshift. Each one helps the system leave
          extension, leave bracing, leave the need to solve gravity with the neck
          and back.
        </Paragraph>

        <Divider />

        <SectionHeading>Design beats intention.</SectionHeading>

        <Paragraph>
          Most behavior fails not from weak character, but from bad architecture.
          The room writes part of the script. So does the phone. So does the
          light. So does the hour. So does the person beside you. Increase
          friction for the habit you want gone. Reduce friction for the one you
          want kept. Put water, shoes, journal, and morning light where the eye
          lands first. Remove negotiation before the urge arrives.
        </Paragraph>

        <Callout>
          The weak point is rarely the will. It is usually the room.
        </Callout>

        <Divider />

        <SectionHeading>Then build the recovery stack.</SectionHeading>

        <Paragraph>
          Water first. Protein next. Light early. Motion daily. Load often.
          Recovery on purpose. Underfed systems distort threat. Dark mornings
          blur circadian timing. Sedentary days thicken mood and body alike.
          Strength matters because it teaches a lesson deeper than affirmation.
          Force can be produced safely. Effort need not equal danger. Confidence
          is often tissue memory before it becomes belief.
        </Paragraph>

        <Divider />

        <SectionHeading>When overload hits, sequence the repair.</SectionHeading>

        <Paragraph>
          Do not begin with philosophy when the building is burning. Begin with
          the body. Exhale long. Soften the eyes. Feel the feet. Unclench the
          jaw. Widen vision. Walk. Drink water. Eat. Rest. Call someone calm.
          Only after physiology loosens should cognition speak. The higher brain
          is brilliant, but it is not first responder equipment.
        </Paragraph>

        <Divider />

        <SectionHeading>This is the hierarchy.</SectionHeading>

        <Paragraph>
          First, reposition. Move the body out of its default bias. Restore the
          rib to pelvis relationship. Find the heel. Find the hamstring. Find the
          exhale.
        </Paragraph>

        <Paragraph>
          Next, retrain. Turn on what has gone quiet. Inner thigh. Hamstring.
          Oblique. Glute. Serratus. Tongue. Low ribs. These are not small
          details. They are the missing operators.
        </Paragraph>

        <Paragraph>
          Then, restore. Bring back reciprocal movement. Left stance. Right
          stance. Rotation. Reach. Push. Walk. Squat. Turn. Breathe. The final
          proof of healing is not how straight you can stand. It is how fluidly
          you can alternate.
        </Paragraph>

        <Divider />

        <SectionHeading>This is where the practical reboot matters.</SectionHeading>

        <Paragraph>
          A 90 90 hip lift with balloon breathing can be powerful for a body that
          lives in extension and bracing. The point is not the drill alone. The
          point is the shift it invites. Hamstrings active. Ribs descending. Full
          exhale. Quieter neck. Softer back. A body that remembers ground. If the
          drill changes state, keep it. If it does nothing, widen the lens.
          Vision. Jaw. Stress load. Fatigue. Injury history. Context. The body
          speaks in systems, not in isolated parts.
        </Paragraph>

        <Callout>
          A good reset should change options. The neck should soften. The left
          heel should clarify. The ribs should drop without collapse. Air should
          enter without strain. One shoulder may rotate farther. One hip may
          adduct with less fight. Calm should feel mechanical, not motivational.
        </Callout>

        <Divider />

        <SectionHeading>Expect regression.</SectionHeading>

        <Paragraph>
          Regression is not betrayal. It is stored preference. Under strain, the
          body reaches for what is familiar, not what is noble. When the old
          routine returns, do not turn one bad rep into biography. Interrupt the
          pattern. Name the trigger. Reduce load. Reinstall the smallest
          corrective action at once. Precision works better than drama. Curiosity
          works better than shame. Repetition works best.
        </Paragraph>

        <Divider />

        <SectionHeading>Social input belongs in the model.</SectionHeading>

        <Paragraph>
          The nervous system is not closed. It reads faces, tone, pace, touch,
          timing. A calm voice can deescalate what analysis cannot. Shared
          laughter can puncture a state that discipline cannot move. Some
          patterns are relational. Their repair is relational too. Regulation
          spreads through contact.
        </Paragraph>

        <Emphasis>This is not weakness. It is architecture.</Emphasis>

        <Divider />

        <SectionHeading>Identity must migrate.</SectionHeading>

        <Paragraph>
          A person who says, "I am trying," still bargains with the old code. A
          person who says, "I do not run that program now," has changed
          jurisdiction. Behavior stabilizes when it stops feeling like effort and
          starts feeling like citizenship in a new internal state. The deepest
          rewrites occur when action and self concept stop arguing.
        </Paragraph>

        <Divider />

        <SectionHeading>So here is the final truth.</SectionHeading>

        <Paragraph>
          You do not rise to your ideals. You return to your conditioning. The
          work, then, is to condition wisely. Build a body that feels safe enough
          to change. Build a room that makes the right action easier. Build a
          breath that can finish. Build senses that can trust the ground. Build
          movement that can alternate. Build an identity that no longer bargains
          with sabotage.
        </Paragraph>

        <Paragraph>
          Run that long enough and the system begins to trust itself.
        </Paragraph>

        <Emphasis>Then the shift arrives.</Emphasis>

        <Paragraph>
          What once felt hard grows quiet. What once required force becomes
          default. And the new self no longer feels new.
        </Paragraph>
      </>
    ),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
