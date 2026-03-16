import React from "react";
import {
  Divider,
  Callout,
  Emphasis,
  SectionHeading,
  Paragraph,
  LeadText,
  BulletList,
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
  {
    slug: "fix-the-neck",
    title: "Fix The Neck",
    subtitle: "Overcoming chronic neck pain",
    category: "Movement",
    date: "March 16, 2026",
    readTime: "45 min read",
    excerpt:
      "A patient's guide to posture correction and pain relief. Always seek medical advice first.",
    content: (
      <>
        <LeadText>Overcoming Chronic Neck Pain</LeadText>

        <Paragraph>
          Archived from fixtheneck.com — A patient&apos;s guide to posture
          correction and pain relief
        </Paragraph>

        <Divider />

        <SectionHeading>Introduction &amp; Personal Story</SectionHeading>

        <Callout>
          <strong>Always seek medical advice first.</strong> Consultation with an
          orthopedist or neurologist, and imaging studies such as MRI or CT scans
          are crucial when evaluating spine-related pain; and more so, if there
          is nerve pain down arms or legs, numbness, weakness, or bladder and
          bowel control issues. Severe nerve root or spinal cord impingement
          needs more than exercise or any passive therapies.
        </Callout>

        <Paragraph>
          I am a former pain patient, not a health care professional. My history
          of neck pain began at age 21 with a severe neck strain from doing head
          swings for a dance class. What followed were 30 years of neck pain,
          and trying to avoid the activities that triggered neck pain. I had to
          be careful using my arms, especially my left arm—for lifting, pulling
          or pushing anything—actions you pretty much have to do with 3 young
          children. To treat the pain, I wore soft collars and used ice and heat
          packs, which sometimes helped and sometimes worsened the pain.
        </Paragraph>

        <Paragraph>
          <strong>MRI Cervical Spine:</strong> Loss of lordotic curve in
          degenerative disc disease. Note disc bulges and bone spur complexes
          jutting into spinal canal at C4-C5, C5-C6, C6-C7.
        </Paragraph>

        <Paragraph>
          For many of those years the pain came and went. But in time the pain
          stayed. That&apos;s when I saw an orthopedist. An MRI showed how bad
          the arthritic changes in my neck were. At 3 levels, the discs had
          flattened, and from their ends, bone spur complexes poked into my
          spinal canal close to the spinal cord. In other MRI cross-sections of
          the area, bone narrowed the spaces called foramen through which nerve
          roots left the spinal cord; this narrowing was a major cause of the
          nerve pain radiating down my left arm—along with neck muscle spasms
          that clamped the vertebrae together.
        </Paragraph>

        <Paragraph>
          It seemed obvious that there wouldn&apos;t be a miracle cure, yet I
          was hoping for some kind of pain relief. So my quest began and over
          the next six years I saw two neurologists, three spine surgeons, a
          neurosurgeon, two pain doctors, a professor of rehabilitative
          medicine, a rheumatologist, four physical therapists (for neck,
          shoulder and back), and an acupuncturist. Treatments included four
          courses of physical therapy for my neck, two for my torn rotator
          cuffs, one for my back and one for hips and knees; six weeks of
          acupuncture; repeat MRIs; a CT scan; numerous epidural, facet joint
          and trigger point corticosteroid injections; steroid dose packs, three
          months of oral low-dose corticosteroids; pain medication;
          antihistamines; muscle relaxants etc. Some treatments brought temporary
          improvement, but by the end of six years of going full bore trying to
          find relief, my neck still wasn&apos;t much better, and now I had
          unresolved pain and limitation in both shoulders, my back, hips and
          knees.
        </Paragraph>

        <Paragraph>
          Both pain doctors and at least one, if not all of the physical
          therapists, believed my next step was neck fusion surgery. But all
          three spine surgeons said that surgery was not warranted yet. My spinal
          cord didn&apos;t show the internal changes that signal severe
          compression in the MRIs—even though from C4 thru C7, the bone spur
          complexes pushed against the lining of the spinal canal and at C4-5
          was up against the spinal cord. I also did not have any numbness or
          weakness from the severe narrowing at the left C5 nerve roots, though
          I did have the chronic nerve pain down my left arm into my thumb.
        </Paragraph>

        <Paragraph>
          So I was not going to have surgery, but I was still in pain and still
          a &quot;neck cripple.&quot; What else was left to try? I&apos;d had
          the usual therapies except chiropractic, which the first spine surgeon
          wouldn&apos;t prescribe because my neck arthritis was too severe.
          Besides, I couldn&apos;t tolerate any direct work on my neck. The pain
          ramped up severely with neck massage or manipulation of neck
          vertebrae, and also with any neck or chin tuck exercise.
        </Paragraph>

        <SectionHeading>The Epiphany</SectionHeading>

        <Paragraph>
          Hopeless. Anytime I used my arms, even to lift a dinner plate or
          change the bed sheets, my neck squealed. Getting through each day took
          huge effort.
        </Paragraph>

        <Paragraph>
          But the wheels were turning and one day, as I happened to look at my
          profile in the mirror, I had an epiphany—not that I could cure my neck
          pain—but that I had lousy posture. I needed to stand up straighter and
          stop looking like a tired, hunched-over old woman. I pulled back my
          shoulders and was reminded of an exercise a physical therapist had
          shown me months before, not for my neck, but for my torn rotator
          cuffs. He called it the &quot;Fixing the Shoulder Blades.&quot; I had
          the exercise down and the physical therapist was touching the right
          spot on my upper back and gave verbal feedback, but I couldn&apos;t
          get the feel for what my shoulder blades were supposed to be doing on
          my own. But now, in front of a mirror and able to visualize my back in
          the reflection, I could see exactly what my shoulder blades were
          supposed to be doing.
        </Paragraph>

        <Paragraph>
          I did the shoulder blade exercise several times every day—and
          didn&apos;t just go through the motions, but worked hard at gaining
          control. I held the &quot;pull-down&quot; as an isometric exercise to
          get the surrounding muscles to tense and &quot;pop out.&quot; Very
          importantly, I reminded myself frequently to straighten my back so I
          wasn&apos;t bent forward all the time—and to lift my head upwards with
          a breath—not just a few times a day but all the time, every day.
        </Paragraph>

        <Paragraph>
          It was about two or three months after that I realized...not only did
          I look better and feel better, but surprise, surprise, my neck pain
          was GONE. So were the headaches, the strange facial pains, and
          tingling.
        </Paragraph>

        <Emphasis>
          FOR THE FIRST TIME IN OVER 6 YEARS, I COULD DO THINGS, EVERYDAY
          ORDINARY THINGS, WITHOUT PAIN!
        </Emphasis>

        <Paragraph>
          A simple exercise, a decision to improve my posture. And finally, my
          chronic neck pain was gone.
        </Paragraph>

        <Paragraph>
          Along the way, I also realized that I needed to work on my lower body
          posture. There is supposed to be an inward curve (lordosis) in the
          lower back that shifts the upper body back over the hips for support.
          Because my lower back was flat, my entire upper body leaned forward,
          not just my head. All it took was consciously stretching the back of
          my thigh (the hamstring) to release the pelvis, which had been
          &quot;locked&quot; in a tilted-back position with my butt tucked under
          and flat. Now that my lordotic curve had returned, my upper body was
          securely over pelvis and hips—the ideal position of support.
        </Paragraph>

        <Callout>
          &quot;The best doctors teach their patients!&quot; — James Salcky MD
        </Callout>

        <SectionHeading>Why This Website</SectionHeading>

        <Paragraph>
          I&apos;m astonished and angry that such a simple, basic fix eluded me
          for so long and also the many medical professionals I sought help
          from, especially the physical therapists. If the first physical
          therapist had evaluated me for what turned out to be faulty posture
          alignment of my entire body, and treated me for the resulting muscle
          imbalances, my neck pain would have been fixed, and the torn rotator
          cuffs, the back, hip and knee pain would never have happened.
        </Paragraph>

        <Paragraph>
          All I ask of medical professionals, especially the physical
          therapists, is that when treatments aren&apos;t working, stand back
          and really look at me, at my specific deficiencies. If my posture is
          terrible, tell me, and explain why it&apos;s important to correct it
          and then what measures will help. Don&apos;t assume I know the extent
          of my poor posture—I need to be shown how bad it is. And don&apos;t
          assume that I could easily change my posture if I wanted to, because I
          can&apos;t when the muscles needed are too weak and the opposing
          muscles too strong.
        </Paragraph>

        <Paragraph>
          Please remember, as with all information, no matter how competent or
          seasoned the messenger appears, always take with a large dose of
          skepticism. Everyone&apos;s situation is unique and no one solution
          works for all. Ultimately, each person takes from all the advice and
          all the possible therapies and ideas, and assembles his or her own
          solution.
        </Paragraph>

        <SectionHeading>Recommendations</SectionHeading>

        <Callout>
          <strong>Recommendation #1:</strong> Make the most of physical therapy
          for neck and/or back pain. Ask the doctor to include postural
          assessment, and treatment if imbalance of postural muscles is found.
          Ignoring poor posture will delay or prevent healing of both traumatic
          and overuse neck, shoulder and back injuries.
        </Callout>

        <Callout>
          <strong>Recommendation #2:</strong> Since faulty posture creates
          imbalances in muscles that stabilize and move shoulder, hip, and knee
          joints, physical therapy for these should also include a posture
          assessment and treatment.
        </Callout>

        <Emphasis>
          &quot;May we all be works in progress forever, and celebrate the fact
          that we are.&quot; — Marc and Angel Hack Life
        </Emphasis>

        <Divider />

        <SectionHeading>Fix The Shoulder Blades</SectionHeading>

        <Emphasis>
          &quot;Fix&quot; — to attach to, to stabilize, to correct, to restore
          to normal function.
        </Emphasis>

        <Callout>
          &quot;One of the more commonly observed postural faults is the
          protracted and downwardly rotated position of the scapula. A
          correction strategy is to have the patient move the coracoid upward
          and the acromion backwards.&quot; — Jull, G et al. &quot;A randomized
          controlled trial of exercise and manipulative therapy for cervicogenic
          headache&quot; in Spine 2002;27:1835-45
        </Callout>

        <SectionHeading>
          How Poor Shoulder Blade Anchoring Causes Neck Pain and Spasm
        </SectionHeading>

        <Paragraph>
          A couple months of working hard at this exercise stopped my neck from
          spasming every time I used my arms. The reason was that the exercise
          strengthened the muscles that anchor the shoulder blades to the middle
          and lower thoracic column. The shoulder blades house the shoulder
          joint and bear the weight of the arms and any forces the arms
          generate, so if the shoulder blades are not strongly anchored to the
          thoracic spine—which happens when middle and lower traps are weak from
          hunched posture—then the shoulder blades are suspended by the upper
          trapezius and levator scapula from the upper cervical spine. The upper
          traps and levator are easily over-stressed, and spasm under the
          unaccustomed load, which causes muscular pain and spasm; their
          attachment points on the cervical vertebrae become irritated and
          painful too, and nerve roots may be compressed during spasm.
        </Paragraph>

        <Callout>
          <strong>Note:</strong> The fix the shoulder blade exercise helped me,
          but it won&apos;t help everyone. If the collar bones are horizontal or
          slope down and/or the shoulders slope down steeply and the neck is
          very long, see the section on Depressed Shoulder Syndrome. Do not do
          part #1, the Pull Down, of Fix the Shoulder Blades exercise because
          pain and nerve impingement may result.
        </Callout>

        <SectionHeading>Exercise Requirements</SectionHeading>

        <Paragraph>
          <strong>Two mirrors</strong> set up to see one&apos;s back and profile
          without difficulty. For example: a swing-out, pivoting mirror on one
          wall, and a large mirror (wardrobe mirror) on the opposite wall.
        </Paragraph>

        <Paragraph>
          The technical term for using mirrors while learning and doing an
          exercise is &quot;neuromuscular re-education with mirrors&quot; and is
          done for people who have some forms of paralysis and need to re-learn
          how to use their muscles. Similarly, those of us with poor shoulder
          blade position and function need to be able to see our backs to figure
          out how to correct the problem. Most of us, in our whole lives, have
          rarely seen our backs and have no mind map of what the structures look
          like or how they move.
        </Paragraph>

        <SectionHeading>Exercise Preliminaries</SectionHeading>

        <BulletList
          items={[
            <>
              <strong>Check the slope of collarbones</strong> — depressed or
              horizontal collarbones indicate that the shoulder blades are
              already set too low in back.
            </>,
            <>
              <strong>Check distance between shoulder blades</strong> — if less
              than 4 or 5 inches apart do not do part 2, &quot;Pinching the
              shoulder blades.&quot; The muscles between shoulder blades are
              already strong.
            </>,
            <>
              <strong>Check kyphosis of upper back.</strong> View yourself in
              profile. If the upper back is very kyphotic (hunched), then
              pulling down the shoulder blades may end up pulling down on top of
              the shoulders. In this case use the alternate Wall Plank Position
              or do the exercise lying on your back on a firm surface so as to
              flatten the kyphosis (if still flexible).
            </>,
          ]}
        />

        <SectionHeading>Fix The Shoulder Blades Exercise</SectionHeading>

        <Paragraph>
          <strong>Pre-Exercise Chest/Shoulder Stretch:</strong> Do Pec Minor
          Stretch and/or Thumbs-up, Palms-up exercise to stretch the pec minor
          and chest area, so there is less resistance to the pull-down.
        </Paragraph>

        <Callout>
          <strong>Important:</strong> Make sure neck and shoulders are relaxed
          during the pull-down. If back of neck/upper traps are tense and
          shoulders are &quot;up around the ears&quot; the pulldown may cause
          upper trap spasm.
        </Callout>

        <SectionHeading>
          Step #1 — Pull Down the Shoulder Blades
        </SectionHeading>

        <Paragraph>
          While observing one&apos;s back in the mirror: slightly lift the tops
          of shoulders, then rotate them back and down in a smooth motion that
          continues by pulling down the shoulder blades. The effort should be
          felt in the mid to lower back, where muscles from below, especially
          the lower trapezius and possibly the lower fibers of serratus
          anterior, contract and pull down on the shoulder blades.
        </Paragraph>

        <Paragraph>
          The shoulder blades don&apos;t actually move much, and they
          shouldn&apos;t, but their tops tilt up vertically allowing the
          shoulder blade to lie flat against the posterior ribcage. The margins
          of the blades closest to the spine should be parallel with each
          other. The result should be that the kyphotic curve of the thoracic
          spine flattens (if flexible), and the neck and head come back into
          line with the spinal column. Very importantly, the movement takes
          place in back and not directly on top of the shoulders.
        </Paragraph>

        <Paragraph>
          <strong>Self Check A:</strong> Face the mirror, repeat the pull down,
          and check that the tops of the shoulders do not depress, but the
          triangle of muscle between neck and shoulder—the upper trapezius—does
          depress as it elongates.
        </Paragraph>

        <Paragraph>
          <strong>
            Alternate Arm Positions for Pulling Down the Shoulder Blades:
          </strong>
        </Paragraph>

        <BulletList
          items={[
            "Stand in front of a door or wall, place forearms against the surface (a wall plank position) thereby stabilizing scapula in a slight upwardly rotated position (more vertical). And then pull down the shoulder blades.",
            "If the thoracic spine is very hunched, try flattening the thoracic curve by lying on the back on a firm surface and then doing the pull-downs.",
          ]}
        />

        <SectionHeading>
          Step #2 — Pinch the Shoulder Blades Together
        </SectionHeading>

        <Paragraph>
          Hold step #1 (Pull Down the Shoulder Blades) and add &quot;Pinch the
          Shoulder Blades Together&quot; without letting shoulders shrug up.
          Effort should come from between the shoulder blades, not from moving
          or twisting arms or hands. (#2 is not needed if shoulder blades are
          generally held less than five inches apart at rest, which indicates
          that intrascapular muscles are already strong.)
        </Paragraph>

        <Paragraph>
          <strong>Part #2 for Depressed Shoulder Blades:</strong> Let the
          shoulder blades shrug up while pinching them together.
        </Paragraph>

        <SectionHeading>Step #3 — Hold and Tense</SectionHeading>

        <Paragraph>
          Hold all positions and tense back muscles, getting them to &quot;pop
          out&quot; for an isometric strengthening exercise (5 seconds to
          start).
        </Paragraph>

        <Paragraph>
          <strong>Self Check B:</strong> Adjust mirrors to see upper body in
          profile. Hold all positions of the exercise and note the results on
          posture. Hopefully flattening of thoracic kyphosis and elimination of
          forward head is seen.
        </Paragraph>

        <SectionHeading>Sets and Reps</SectionHeading>

        <Paragraph>
          When I first started, I&apos;d do one set of 5 or 6 repetitions in
          the morning and one set at night, both times in front of the mirror;
          I&apos;d hold each rep about 5 seconds. During the day, I&apos;d do
          the exercise without mirrors, and whenever correcting whole body
          posture. In time, I&apos;d hold each rep 8 to 10 seconds.
        </Paragraph>

        <Callout>
          <strong>Very Important:</strong> Do not overdo &quot;Pulling Down of
          Shoulder Blades.&quot; Some people pull down so vigorously and so
          often, that the upper trapezius becomes over-stretched and weakened,
          which damages its task of holding up the shoulders in a healthy
          position. An over-stretched upper trapezius causes depressed
          shoulders, which is a potential source of neck pain. Strive for
          balance between upper and lower trapezius. If Pulling Down of the
          Shoulder Blades causes pain, please stop.
        </Callout>

        <SectionHeading>Pectoralis Minor Stretching</SectionHeading>

        <Paragraph>
          What if the chest muscles are so tight that shoulder blades cannot be
          pulled down in back? The pectoralis minor arises from the front of
          ribs 3, 4 and 5 and inserts on the coracoid process of the shoulder
          blade. It is responsible for pulling on and tilting the top of the
          shoulder blade down, toward the front of the body.
        </Paragraph>

        <Paragraph>
          If very tight and short, the pectoralis minor may need to be stretched
          first to allow the shoulder blades to tilt back up. The Unilateral
          Corner Stretch is reported to yield the best pec minor stretch, but
          there is a risk that the anterior shoulder capsule will be
          over-stretched.
        </Paragraph>

        <Paragraph>
          Patience is the key. It takes weeks or months to add sarcomere units
          to lengthen a short, tight muscle. Be gentle but persistent.
        </Paragraph>

        <Paragraph>
          At first, maintaining good posture is difficult because muscles that
          have been weakened by years of poor posture will fatigue easily,
          especially when antagonistic muscles are too tight. Posture
          correction, in itself, is legitimate exercise that pays off by toning
          and strengthening postural stabilizing muscles, and in time, posture
          correction will feel more natural and becomes progressively easier.
        </Paragraph>

        <SectionHeading>
          An Exception: Depressed or Droopy Shoulder Posture
        </SectionHeading>

        <Paragraph>
          An exception to use of part #1 of Fix the Shoulder Blades Exercise is
          a condition called Depressed or Droopy Shoulders Syndrome that is
          often present in women with low set, steeply sloping shoulders and
          long necks. Their collarbones slope down toward the shoulder joint
          rather than the usual slope up. Pain in neck, shoulder, arms and hands
          is aggravated by downward traction on shoulders and relieved by
          propping up the arms. Thoracic outlet syndrome may be involved.
        </Paragraph>

        <Paragraph>
          In Depressed/Droopy Shoulders the shoulder blades are already held too
          low on the back and don&apos;t need to be lower. Maintaining a slight
          lift of the shoulders helps. Exercises such as shoulder shrugs help
          with strengthening the upper trapezius. High shoulder shrugs also
          stretch the tight lower trapezius.
        </Paragraph>

        <Paragraph>
          Sometimes it&apos;s the lower trapezius that is too strong and short
          (lower trap dominance), while the upper trapezius is elongated and
          weak. The neck may appear very long, the shoulders slope down steeply
          and in back, the shoulder blades are held too low. The best clue to
          depressed shoulder is that the collar bones slope down toward the
          shoulder joint. A painful condition called Thoracic Outlet Syndrome
          (TOS) may be more common with depressed shoulders.
        </Paragraph>

        <SectionHeading>
          Beyond &quot;Fix the Shoulder Blades&quot;
        </SectionHeading>

        <Paragraph>
          <strong>#1. Further Strengthening:</strong> For further strengthening
          of the upper back when shoulder blades are better stabilized and
          neck/upper back pain is gone, begin lateral and front raises without
          weights while observing your back in a mirror. When that&apos;s easy,
          progress to light weights. The important points: 1) chest is up and
          shoulders back, 2) in the Lateral Raise, when arms come back down,
          keep shoulder blades strong/stabilized, 3) in Front Raise, shoulder
          blades should come around to the side and not wing out from the ribs,
          and 4) muscle tension in neck and upper trapezius should be minimal.
        </Paragraph>

        <Paragraph>
          <strong>#2. Lower Body Posture:</strong> Once the excessive kyphotic
          curve of the upper back is reduced and upper back extensors are
          strengthened, there are still the effects that long-term slouched
          posture have on lower body posture. Sustained correction of slumped
          posture also depends on reminding oneself to straighten the mid-back
          and lift the chest during all activities throughout the day.
        </Paragraph>

        <SectionHeading>
          Correction #1: Pulling Down the Shoulder Blades
        </SectionHeading>

        <Paragraph>
          It helps to think of the shoulder blades as two rigid, triangular,
          curved plates lying on and fitting the contour of the posterior rib
          cage. In slouched posture the shoulder blades ride up the upper
          back&apos;s exaggerated kyphotic curve like it was a hill; the tops of
          the shoulder blades tilt downhill toward the front of the body, while
          the bottoms tilt up. And as well, the shoulder blades have drifted
          apart and down the sides of the hill/ribcage, toward the underarms.
        </Paragraph>

        <Paragraph>
          What is needed for improved posture is to rotate the shoulder blades
          upward, back and down, to a more vertical position. This requires
          they be pulled down the &quot;hill&quot; by muscles such as the lowest
          fibers of the Serratus Anterior and the Lower Trapezius (Kendall).
        </Paragraph>

        <Paragraph>
          Pulling down the shoulder blades is opposed by the pectoralis minor,
          which attaches the coracoid to the 3rd through 5th ribs in front.
          Tightness of the pectoralis minor can be seen when lying on one&apos;s
          back on a firm surface with arms at sides: the shoulders don&apos;t
          relax on the surface but are held above it.
        </Paragraph>

        <SectionHeading>
          Correction #2: Pulling the Shoulder Blades Together
        </SectionHeading>

        <Paragraph>
          The muscles used are the Middle and Lower Trapezius and the Major
          Rhomboids (Kendall). But the serratus anterior that helps pull the
          shoulder blades down also tries to pull the shoulder blades apart. And
          the rhomboids that can pull the shoulder blades together also cause
          them to elevate. So a great deal of coordinated action is needed for
          the shoulder blades to move in the desired direction. However, the
          details aren&apos;t really important; what is important is the
          knowledge that it&apos;s possible to do the exercise and to keep
          trying while observing the action until it looks and feels right.
        </Paragraph>

        <Divider />

        <SectionHeading>
          Fix the Posture: Upper and Lower Body
        </SectionHeading>

        <Callout>
          Always seek medical advice first when dealing with neck, back, hip or
          shoulder pain or functional limitations. Pain or muscle weakness may
          have any number of causes; one is severe nerve root or spinal cord
          impingement, which needs more than exercise or any of the passive
          therapies.
        </Callout>

        <Emphasis>
          &quot;Are we so beaten down by life, we have to stand that way
          too?&quot;
        </Emphasis>

        <SectionHeading>1. Upper Body Posture in Side View</SectionHeading>

        <Paragraph>
          <strong>Upper Body in 5 Types of Standing Posture.</strong> The
          vertical line runs through the C-7 cervical vertebral body. Note how
          the head&apos;s center of gravity shifts forward in faulty postures.
        </Paragraph>

        <Paragraph>
          All four of the main types of faulty posture seen in side view—Flat
          Back, Sway Back, Kyphotic-Lordotic, and Kyphotic Back—have some
          degree of excessive forward curve of the upper back that results in
          the &quot;dead weight&quot; of the head extending out over the chest
          instead of over the shoulders and squarely supported by the spinal
          column. This is like holding an 8 to 10 pound bowling ball one to
          several inches out in front of you—all day, every day—where it feels
          much heavier than if it was held close to the body.
        </Paragraph>

        <Paragraph>
          If chronically tight neck muscles are injured in an accident or
          strained by overuse, they do not heal well because of lack of rest
          and reduced blood circulation (tightness tends to keep the blood
          &quot;squeezed out&quot; of the muscle). Poor healing weakens muscles
          and keeps them inflamed, irritated, and prone to reinjury.
        </Paragraph>

        <Paragraph>
          Meanwhile the front neck muscles (neck flexors) that bend the neck
          forward and help balance the head by preventing it from falling
          backward, have little to do, since in slouched posture the head is
          already held forward. Thus the front neck flexors weaken and atrophy
          from disuse rather than from overwork like the back neck extensors.
        </Paragraph>

        <Paragraph>
          Persistent hunching of the upper back combined with rounding forward
          of the shoulders also causes:
        </Paragraph>

        <BulletList
          items={[
            "Stretching and weakness of upper and mid back extensors",
            "Shortening and tightness of front chest muscles—the pectoralis major and pectoralis minor—which makes raising and expanding the chest more difficult. A short, tight pectoralis minor is one of three possible causes of Thoracic Outlet Syndrome (TOS).",
            "Widening of the distance between shoulder blades, which causes stretching and weakening of the middle and lower trapezius",
            "Stretching and weakening of the levator scapula at the side of the neck, but shortening and tightening of the upper trapezius",
          ]}
        />

        <Paragraph>
          Improved Upper Body Posture brings the shoulder blades closer together
          and does not allow stretching/weakening of the middle and lower
          trapezius or rhomboids, all three of which transmit forces from
          lifting/pushing/pulling weight with the arms to the more robust
          thoracic spinal column of the back. With good stabilization of
          shoulder blades by these larger muscles, very little force is
          transmitted to the more delicate cervical spine.
        </Paragraph>

        <SectionHeading>
          2. Goals for Correcting Upper Body Posture
        </SectionHeading>

        <BulletList
          items={[
            "Reduce postural kyphosis/hunching of the thoracic spine by stretching tight chest and front shoulder muscles, and strengthening weak upper and mid-back spine extensors.",
            "Improve Shoulder Blade Stabilization to the mid and lower thoracic spine by strengthening and shortening middle and lower trapezius.",
            <>
              <strong>For Depressed Shoulder(s) only:</strong> Decrease downward
              range of motion of the shoulders by shortening and strengthening
              the upper trapezius and levator scapula with shoulder shrug
              exercises. Stretch the lower trapezius muscles.
            </>,
            "Develop the habit of self-correcting posture during the process of strengthening postural muscles.",
          ]}
        />

        <SectionHeading>
          3. Preliminaries to Posture Correction
        </SectionHeading>

        <Paragraph>
          <strong>Tailor Corrective Exercise to Your Posture Type:</strong>{" "}
          Posture at rest depends on the sum total of relative strengths and
          weaknesses among muscles and muscle groups. Use your specific posture
          faults as a guide to help decide which muscles need strengthening and
          which need stretching. A general exercise class will probably not
          improve posture and may work against you.
        </Paragraph>

        <Paragraph>
          <strong>
            Exercise Safely — Slow Down for Stretching and Control for
            Strengthening:
          </strong>
        </Paragraph>

        <Paragraph>
          <em>Stretching:</em>
        </Paragraph>

        <BulletList
          items={[
            "Stretch in a slow, mindful manner. Quick or bouncy movements activate the stretch reflex, which causes immediate contraction of the stretched muscle.",
            "Allow time—weeks to months—for stretching to be effective. Increasing the length of a too-short muscle requires addition of muscle units called sarcomeres.",
            "Studies show a minimum hold of 30 seconds gives good results in young and middle-aged adults. In adults older than 65, a hold of 60 seconds is best.",
          ]}
        />

        <Paragraph>
          <em>Strengthening and Shortening:</em>
        </Paragraph>

        <BulletList
          items={[
            "Allow time—weeks to months—to shorten and strengthen an elongated, weak muscle.",
            "Perform strengthening exercises in a controlled and mindful manner. Slow movement has advantages: no momentum to help the prime mover, and the antagonist can't just let go but remains tense as muscle fibers slowly lengthen (eccentric contraction).",
            "If a workout causes pain, try to figure out why before continuing.",
          ]}
        />

        <SectionHeading>Key Posture Practices</SectionHeading>

        <Paragraph>
          <strong>First key practice:</strong> A) For those with flat and sway
          backs, squeeze/tense the muscles in the mid-back around waist level
          and butt (gluteals) to straighten the spine and bring the upper body
          squarely over hips. B) For those with hyper-lordotic backs,
          concentrate on lengthening the lumbar spine.
        </Paragraph>

        <Paragraph>
          <strong>Second key practice:</strong> Practice rising breaths. Fill
          the top of the chest with air to stretch tight upper chest muscles and
          naturally reduce rounding of the thoracic spine and help bring the
          neck and head back over the shoulders.
        </Paragraph>

        <Paragraph>
          <strong>Third key practice:</strong> Correct faulty posture habits
          that tend to worsen left-right asymmetry. Stand with weight evenly
          distributed between both legs. Sit with back straight and both feet on
          the floor.
        </Paragraph>

        <Paragraph>
          <strong>Fourth key practice:</strong> When lifting, pulling or pushing
          weight, concentrate on keeping shoulder blade movement controlled.
          When the arms lower and the shoulder blades are returning to their
          resting position, do not let them &quot;crash&quot; back down.
        </Paragraph>

        <Paragraph>
          <strong>Fifth key practice:</strong> Keep thumbs facing forward when
          arms are at the side. If backs of the hands usually face forward and
          palms backward, the arm is rotated to the front, signaling that the
          head of the upper arm bone is rotated forward in the shoulder socket.
        </Paragraph>

        <SectionHeading>
          The Exercises for Upper Body Posture
        </SectionHeading>

        <Paragraph>
          <strong>Fix the Shoulder Blades Exercise:</strong> A generally
          pain-free exercise that consists of pulling down and squeezing
          together the shoulder blades, and then holding for an isometric
          contraction. Very importantly, a mirror set-up is used to provide
          visual feedback. This exercise strengthens lower and middle trapezius
          and rhomboids, returns upper traps and levator scapula to their
          optimal lengths, and repositions shoulder blades.
        </Paragraph>

        <Paragraph>
          <strong>
            Prone &quot;Y&quot;, &quot;T&quot;, &quot;W&quot; and &quot;L&quot;
            Positions Exercise:
          </strong>{" "}
          Similar movements but done against gravity, adding difficulty. Lie
          prone (face down) on floor, place arms in one of the four positions,
          have thumbs pointing up and keep shoulders down away from ears,
          squeeze the shoulder blades together while lifting arms and chest (but
          do not lift the chest more than 1 or 2 inches off ground to avoid
          hyper-extension of lower back).
        </Paragraph>

        <Paragraph>
          <strong>Variant for Depressed shoulders:</strong> Lie face down. Place
          hands on back of head, fingers interlaced. Squeeze shoulder blades
          together and lift arms off the floor, but not chest. Elbows should not
          lift higher than wrists.
        </Paragraph>

        <Paragraph>
          <strong>Arm Slides / Wall Angels:</strong> Face the wall &quot;Y&quot;
          corrective exercise.
        </Paragraph>

        <SectionHeading>4. Lower Body Posture</SectionHeading>

        <Paragraph>
          Maintaining improved upper body posture is much easier when the lower
          body is properly aligned. It is the lordotic/inward curve of the lower
          back that positions the upper body over the hips and allows a stable
          erect posture. Without a lordotic curve, the entire body tends to tilt
          forward.
        </Paragraph>

        <SectionHeading>
          5. Goals and Preliminaries for Correcting Lower Body Posture
        </SectionHeading>

        <BulletList
          items={[
            "For flatback and swayback postures, increase lumbar lordosis and bring the upper body over the hips for firm support.",
            "For hyper-lordotic lower backs, reduce the lumbar lordotic curve.",
            "For swayback, strengthen weak abdominal muscles (external obliques).",
            "Remind oneself frequently not to hyper-extend the knees.",
          ]}
        />

        <Paragraph>
          <strong>
            Lower body posture in side view is determined by two factors:
          </strong>
        </Paragraph>

        <Paragraph>
          <strong>1. Tilt of the pelvis:</strong> The pelvis is attached to the
          base of the lumbar spine by the Sacrum. If the pelvis tilts forward,
          the sacrum and lumbar spine are pulled forward resulting in excessive
          lordotic curve. If the pelvis tilts backward, the lumbar curve
          straightens as seen in Flat Back Posture.
        </Paragraph>

        <Paragraph>
          Pelvic Tilt is determined by the relative strengths and weaknesses
          among four groups of muscles that attach to the pelvis: Abdominals
          and Hip Flexors at the front, and Low Back Extensors and Hip Extensors
          at the back.
        </Paragraph>

        <Callout>
          <strong>
            Why be concerned about pelvic tilt when it&apos;s the neck or
            shoulders that hurt?
          </strong>{" "}
          Ultimately neck posture depends on alignment of the body below the
          neck. If the pelvis tilts too far backward, the lumbar curve is flat
          and the upper body tilts forward. If the pelvis tilts too far forward,
          the lumbar spine takes on a hyper-lordotic shape, and to
          counter-balance, the upper back becomes hyper-kyphotic.
        </Callout>

        <SectionHeading>Muscles That Control Pelvic Tilt</SectionHeading>

        <Paragraph>
          Four groups of muscles control pelvic tilt: Abdominals and Hip Flexors
          at the front; Low Back Extensors and Hip Extensors at the rear.
        </Paragraph>

        <Paragraph>
          <strong>
            A. Two opposing muscle groups attach to the anterior (front) half of
            the pelvis:
          </strong>
        </Paragraph>

        <BulletList
          items={[
            "Abdominals (Rectus Abdominis, External oblique) exert upward pull on pelvis.",
            "Hip Flexors (Rectus femoris, Tensor fasciae latae, Iliopsoas, Sartorius) exert downward pull.",
          ]}
        />

        <Paragraph>
          <strong>
            B. Two opposing muscle groups attach to the posterior (rear) half of
            pelvis:
          </strong>
        </Paragraph>

        <BulletList
          items={[
            "Low Back Extensors exert upward pull on the pelvis.",
            "Hip Extensors (Gluteus maximus, Hamstrings) exert downward pull.",
          ]}
        />

        <Paragraph>
          With all four groups in balance, the pelvis is held in neutral
          position, giving the lower back a slight lordotic curve. This
          alignment results in 80–90% of upper body weight being supported by
          the vertebral bodies and discs, while the remaining 10–20% is
          supported by the more delicate rear facet joints.
        </Paragraph>

        <SectionHeading>Types of Faulty Lower Body Posture</SectionHeading>

        <Paragraph>
          <strong>Hyper-lordotic Back:</strong> Weak anterior abdominal muscles
          allow the anterior pelvis to tip down and forward. Tight hip flexors
          pull the anterior pelvis down and forward. Tight Low Back Extensors
          pull upward on the posterior pelvis.
        </Paragraph>

        <Paragraph>
          <strong>Flat Back:</strong> Tight Hamstrings pull pelvis down in back,
          producing posterior pelvic tilt which straightens the normal lordotic
          curve. Strong abdominals pull up on anterior pelvis further
          accentuating posterior tilt.
        </Paragraph>

        <Paragraph>
          <strong>Sway Back:</strong> Short, tight Hamstrings pull down on
          posterior pelvis, tilting it backward and flattening the normal
          lordotic curve. The External Oblique abdominal is elongated and
          weakened from accommodating to the backward sway of the upper trunk.
        </Paragraph>

        <Paragraph>
          <strong>Asymmetric:</strong> One hip higher and more prominent. Cause
          may be postural/handedness asymmetries, structural scoliosis or a
          combination. On the side with the higher hip, core muscles are
          compressed and tight; the gluteus medius is over-stretched and
          compromised in helping to stabilize the hip.
        </Paragraph>

        <SectionHeading>6. Standing Tall</SectionHeading>

        <Paragraph>
          Before postural self-correction can begin in earnest, it&apos;s
          important to feel and understand what standing in an upright position,
          perpendicular to the ground, is really like. What a surprise, when I
          realized that standing against a wall felt unnatural because my normal
          posture was, and always had been, leaning forward and bent at
          mid-back.
        </Paragraph>

        <Paragraph>
          Notice whether one&apos;s body weight is evenly distributed over the
          soles of both feet, from side to side, and front to back. More
          pressure on the ball of the foot and big toe indicates that one is
          leaning forward. &quot;Forward Body&quot; is a strain on the posterior
          muscles of the trunk and legs, which remain in constant contraction as
          they try to keep the off-balance body from falling forward.
        </Paragraph>

        <Emphasis>
          &quot;Maybe by bringing more balance to the way we stand, we will
          bring more balance and stability to our lives in general.&quot;
        </Emphasis>

        <SectionHeading>Finding the Determination To Change</SectionHeading>

        <Paragraph>
          Some people know they have poor posture and simply accept it. Others
          have poor posture but believe they have good posture. The first step
          is to really look at your body from the front, the back and side.
          Arrange for a two-mirror set-up that shows side and back views, and
          then be completely honest with yourself in front of the mirror.
        </Paragraph>

        <Paragraph>
          To change one&apos;s posture means turning away from comfortable ways
          of being in the world, and accepting short-term discomfort. Correcting
          posture doesn&apos;t have the intensity of aerobics or weight
          training, but does require persistence until weak, stretched-out
          muscles tighten and strengthen.
        </Paragraph>

        <Paragraph>
          Weak, stretched-out postural muscles are like the elastic waistbands
          of old underwear. Waistbands get stretched and loose, and underwear
          won&apos;t stay up. Loose waistbands can&apos;t fix themselves, but
          loose, weak muscles can. And with the right exercise and correct use,
          muscles regain optimal length, strength, and resistance to stretching.
        </Paragraph>

        <Paragraph>
          <strong>Some benefits of frequent self-correction of posture:</strong>
        </Paragraph>

        <BulletList
          items={[
            "Serves as therapy for the neck by regularly reducing harmful loads on the cervical joints caused by poor head, neck and shoulder blade alignment. (adapted from Gwendolen Jull)",
            "Trains and strengthens the postural stabilizing muscles while they are being used in everyday activities.",
            "Standing and sitting tall positively affects the way people feel about themselves. Studies show that briefly assuming an open and expansive posture decreases the stress hormone cortisol, increases testosterone and increases feelings of power and tolerance for risk. (Carney et al.)",
            "Diligent self-correcting of posture over 2 weeks strengthened self-control/willpower and improved performance on unrelated tasks. (Hurusen, Burstmer and Tico, 1999)",
          ]}
        />

        <Paragraph>
          <strong>Remind oneself frequently to:</strong>
        </Paragraph>

        <BulletList
          items={[
            "Keep the body evenly balanced between ball and heel of foot.",
            "Keep knees loose to avoid hyperextending both knees and hips.",
            "Bend/hinge at the hips, not at the waist and upper back, which rounds the spine.",
            "Include Upper Body Alignment: Keep the mid back straight and chest lifted without excessively arching the back.",
          ]}
        />

        <Divider />

        <SectionHeading>Left-Right Asymmetry</SectionHeading>

        <Paragraph>
          Complicating any of the faulty postures in profile (e.g. flat back,
          swayback, kyphotic-lordotic etc.) may be differences between left and
          right halves of the body. Commonly, when the pattern of asymmetries is
          associated with being left or right handed, this is called
          &quot;handedness posture.&quot;
        </Paragraph>

        <SectionHeading>1. Handedness Posture Characteristics</SectionHeading>

        <Paragraph>
          Right-handed people may have one or more of the following asymmetries
          (left-handers have the opposite):
        </Paragraph>

        <BulletList
          items={[
            "Lower right shoulder",
            "Head tilt to the right (or if not tilted, a greater distance between neck and right shoulder with over-stretched right upper trapezius)",
            'Deviation of the thoracic spine toward the left in a "C"-shaped curve',
            "A higher right hip that sways to the right, resulting in overstretched and weaker right gluteus medius",
            "A prominent right pelvic ilium rotated toward the front, closer to the umbilicus",
            "A lower left hip with tighter, shorter, lateral hip muscle and fascia (tensor fasciae latae and iliotibial band)",
            "A rotated left pelvic ilium toward the back",
            "The right leg appears longer than the left leg",
          ]}
        />

        <Paragraph>
          <strong>
            Example of a Habitual Way of Standing that Contributes to Postural
            Asymmetry.
          </strong>{" "}
          Note: slightly uneven eye and ear levels, low shoulder, &quot;C&quot;
          curve, high hip, weight shifted to right leg.
        </Paragraph>

        <Paragraph>
          Right handedness posture may be worsened by habits such as:
        </Paragraph>

        <BulletList
          items={[
            "Standing with more weight on the right leg with the right hip higher and shifted to the right",
            "Sitting with left leg and foot tucked under the butt",
            "Lying on one's left side, propped up by the left elbow",
            "Holding a baby exclusively on the right hip",
          ]}
        />

        <SectionHeading>
          2. One-Sided Pain from Handedness Posture
        </SectionHeading>

        <Paragraph>
          Examples of one-sided pain in right-handedness posture include:
        </Paragraph>

        <BulletList
          items={[
            "The left side of the neck, when head tilts to the right—left lateral neck muscles are over-stretched trying to keep the head from falling further to the right",
            "The right hip because of stretched gluteal hip muscles and destabilization of the hip joint",
            "The left side of the knee because of tight left lateral hip muscles that pull on the iliotibial band",
            "The right side of the back because of shortening of right side torso muscles compressed between low right shoulder and raised right hip",
          ]}
        />

        <Paragraph>
          <strong>What causes left-right asymmetries?</strong> Handedness posture
          characteristics are postural: they are the result of long-term habits
          in standing, sitting, lying and playing sports such as tennis or golf
          that exaggerate handedness tendencies.
        </Paragraph>

        <SectionHeading>
          3. How to Correct Handedness Asymmetries
        </SectionHeading>

        <Emphasis>
          &quot;Usually, shoulder correction tends to follow correction of
          lateral pelvic tilt...&quot; — Kendall et al.
        </Emphasis>

        <Paragraph>
          <strong>Goals:</strong>
        </Paragraph>

        <BulletList
          items={[
            "Lengthen compressed torso muscles on the side of the low shoulder, and shorten elongated torso muscles on the side of the higher shoulder",
            "Equalize shoulder heights",
            "Reduce head tilt",
            "Shorten and strengthen stretched hip stabilizer muscles on the side of the higher, more prominent hip",
            "Stretch over-tight lateral hip and leg muscles on the side of the lower hip",
            "Correct malrotation of pelvis",
            "Frequently remind oneself to stand with weight evenly distributed between both legs",
          ]}
        />

        <SectionHeading>4. Exercises</SectionHeading>

        <SectionHeading>
          1) Lateral Side Bend and Shoulder Shrug Up
        </SectionHeading>

        <Paragraph>
          <em>
            Lengthens compressed torso muscles on the side of low shoulder,
            shortens elongated torso muscles on the side of higher shoulder,
            equalizes shoulder and hip heights.
          </em>
        </Paragraph>

        <Paragraph>
          <strong>A. For right handers:</strong> Stretch right lateral trunk
          muscles with side bends to the left, and shorten right upper trapezius
          with shrug up of right shoulder:
        </Paragraph>

        <BulletList
          items={[
            "Steady the body by placing the left hand, palm down on a bar or countertop for support.",
            "Shrug the right shoulder up toward ears and hold.",
            "At the same time, bend the torso to the left (side bend) over the support arm until a gentle stretch is felt along the right side.",
            "Hold for several seconds (working up to 20 seconds if no pain).",
            "At the end of the stretch, return to vertical posture by pushing up with the left arm.",
            "Optional: Upper trapezius strengthening with shrug-ups using dumbbell weight on right side until shoulder height is equalized.",
          ]}
        />

        <SectionHeading>3) The Hip Area</SectionHeading>

        <Paragraph>
          <strong>
            To address weakness around joint of the higher hip:
          </strong>
        </Paragraph>

        <Paragraph>
          <strong>Hip Muscles:</strong> Posterior view showing gluteus maximus,
          gluteus medius, and iliotibial tract. Anterior/medial view showing
          psoas major, iliacus, tensor fasciae latae, piriformis, and
          adductors.
        </Paragraph>

        <Paragraph>
          Squats and sit-to-stands (sit in a chair and stand up with body
          weight more towards the heel of the foot; eventually hold dumbbells to
          increase difficulty).
        </Paragraph>

        <Paragraph>
          <strong>
            To address tightness around joint of the lower hip:
          </strong>
        </Paragraph>

        <Paragraph>
          Stretch the lateral hip muscles (Tensor fasciae latae) and fascia
          (Iliotibial tract or IT band). A tight, shortened lateral hip muscle
          contributes to a short-appearing leg (Kendall et al.).
        </Paragraph>

        <Callout>
          <strong>Precaution:</strong> Take caution so that you do not
          experience knee pain from the IT band at any time. This exercise is
          not for everybody.
        </Callout>

        <SectionHeading>Pelvic Anatomical Misalignment</SectionHeading>

        <Paragraph>
          Asymmetries between right and left hip can result from rotation of the
          pelvic bones. The rotation of the pelvic bone is a possible key to a
          number of problems.
        </Paragraph>

        <Paragraph>
          When the pelvis rotates, it tilts and takes the lumbar spine with it.
          To correct the tilt, we need to fix or balance the core muscles, with
          core muscle strengthening exercises that include working the back
          extensors, the oblique muscles, the transverse abdominis and
          strengthening the pelvic floor. We need to lengthen hip flexors and
          strengthen the obliques, which are like guy wires that hold the pelvis
          in a neutral position.
        </Paragraph>

        <SectionHeading>
          Exercises to Correct Pelvic Malrotation
        </SectionHeading>

        <Paragraph>
          <strong>Part 2 — For right-side inflare:</strong>
        </Paragraph>

        <BulletList
          items={[
            "Lie on the left side, knees up, on a flat, padded surface.",
            "Bring right leg up to a 90 degree angle and cross it over the left leg in a figure-4 position.",
            "Try to pull the right knee forward with both hands.",
            "Hold for count of 20. Repeat 5 to 8 times.",
          ]}
        />

        <Paragraph>
          <strong>Part 3 — Torso rotation:</strong>
        </Paragraph>

        <Paragraph>
          Often, when the torso locks, the torso rotates to the right to
          counteract the pelvis rotation to the left, which results in shortened
          right oblique abdominal and psoas major, while on the left side there
          are correspondingly elongated torso muscles.
        </Paragraph>

        <Paragraph>
          Any asymmetry is conveyed; keep monitoring for correction. It is
          important to regularly self-monitor the condition by checking in a
          mirror for posture and positioning.
        </Paragraph>

        <Divider />

        <SectionHeading>Posture and Pain</SectionHeading>

        <SectionHeading>
          1. Pain in Neck, Shoulder and Upper Back Muscles
        </SectionHeading>

        <Paragraph>
          Slouched posture causes Forward Head and Destabilization of Shoulder
          Blades, both of which predispose to spasm, pain and inflammation of
          the neck, upper back and shoulders. These are chronic muscle strain
          symptoms and even though attributed to a previous neck injury and/or
          existing degenerative disc disease and spinal osteoarthritis, slouched
          posture may likely be the root cause even though these other disorders
          are present.
        </Paragraph>

        <SectionHeading>2. How Forward Head Causes Pain</SectionHeading>

        <Paragraph>
          When posture is hunched, the chest &quot;caves in,&quot; the shoulders
          round forward, the upper back hunches over (increased kyphotic curves)
          and the shoulder blades separate to the front. The increased kyphosis
          puts the upper back into a hunched position, causing the head to be
          held in front of the center of gravity. With each inch forward, the
          force exerted to support the head&apos;s weight increases by ten
          pounds per inch. At 3 inches forward, the average 10-pound head feels
          like 40 pounds (Cailliet). So the neck and shoulders must bear this
          increased weight by contracting more forcefully, while the front neck
          flexors, especially the deep neck flexors, aren&apos;t needed at all
          and weaken from disuse atrophy.
        </Paragraph>

        <SectionHeading>
          3. Benefits of Improving Forward Head
        </SectionHeading>

        <Paragraph>
          Getting benefits from improved posture takes consistent practice and
          time. The muscles involved in posture of the neck include neck
          extensors, neck flexors, levator scapula, the deep neck flexors, and
          rhomboids—all of which are able to work together to keep the head
          balanced, well centered, and relatively effortlessly on the spine. The
          first and most important step in improving Forward Head is the
          re-balancing and strengthening of neck muscles. The chin tuck is the
          most effective exercise.
        </Paragraph>

        <SectionHeading>4. Destabilized Shoulder Blades</SectionHeading>

        <Paragraph>
          Shoulder blade destabilization occurs when two muscle groups weaken:
        </Paragraph>

        <BulletList
          items={[
            "The lower fibers of the Serratus Anterior (particularly) and Rhomboid muscles that stabilize the shoulder blades to the mid-thoracic spine",
            "The middle trapezius muscle that attaches the shoulder blade to the thoracic spine",
          ]}
        />

        <Paragraph>
          <strong>
            Faulty shoulder blade stabilization changes movement patterns:
          </strong>
        </Paragraph>

        <BulletList
          items={[
            <>
              <strong>A.</strong> Shoulder blades rise too high when arms are
              raised, causing pain. The upper traps dominant pattern exists when
              the traps take over the bulk of the scapular movement.
            </>,
            <>
              <strong>B.</strong> Lagging or failing gliding movement of the
              shoulder blades when arms are raised.
            </>,
            <>
              <strong>C.</strong> &quot;Winging&quot; or jutting up of shoulder
              blade(s) rather than hugging the back ribs, often due to weakness
              of serratus anterior.
            </>,
            <>
              <strong>D.</strong> Difficulty raising one arm and shoulder blade
              higher than the other when both arms are overhead.
            </>,
          ]}
        />

        <SectionHeading>
          5. How Destabilized Shoulder Blades Cause Neck and Upper Back Pain
        </SectionHeading>

        <Paragraph>
          Destabilizing the shoulder blades causes the muscles that suspend the
          shoulder blades from the cervical spine to become overstretched. The
          levator scapula and the upper trapezius become simultaneously
          stretched and hypertonic. Chronic strain from being simultaneously
          overstretched and in spasm creates increasing inflammation and chronic
          pain. Focal points of hypertonicity where the muscles are stressed the
          most often calcify, forming &quot;trigger points.&quot;
        </Paragraph>

        <Paragraph>
          Pain due to inflammation of the levator and upper traps may flare with
          neck massage or neck stretching.
        </Paragraph>

        <SectionHeading>
          6. Benefits of Improving Shoulder Blade Stabilization
        </SectionHeading>

        <Paragraph>
          Improving posture and shoulder blade stabilization is intended to
          relieve strain on the muscles of the neck. When the shoulder blades
          are pulled back and stabilized closer to the spine by stronger middle
          and lower trapezius, the shoulder blade stabilizing muscles help
          maintain the head over the thorax and minimize imbalance. Improved
          posture may also allow the chest to expand more easily with each
          breath.
        </Paragraph>

        <SectionHeading>
          7. How Poor Posture Causes Worsening of Radicular Pain
        </SectionHeading>

        <Paragraph>
          Posture is a poor but little-known factor in cervical radiculopathy.
          With hunched posture, the shortened upper back combined with a forward
          head position is one of the biomechanical problems that may intensify
          narrowing of the openings where the spinal nerves leave the spine.
        </Paragraph>

        <Callout>
          <strong>Very importantly:</strong> If there is numbness and/or
          weakness of arms or legs, see a doctor. &quot;Persistent pressures
          upon a nerve root of three months duration may not recover when the
          pressure is relieved&quot; (Cailliet). This means surgical
          decompression must be done before permanent damage occurs.
        </Callout>

        <SectionHeading>8. Cervicogenic Headaches</SectionHeading>

        <Paragraph>
          Cervicogenic headaches are diagnosed when the head pain is provoked by
          neck pain and limitation, and is made worse by changes in neck
          position. At least two potential causes:
        </Paragraph>

        <BulletList
          items={[
            "Tight posterior neck muscles may irritate the occipital nerve, which runs through the upper trapezius and semispinalis capitis.",
            "Spasm and tightness of the levator scapulae at the side of the neck can irritate the cervical nucleus of the trigeminal cranial nerve and cause discomfort and pain just underneath the ear at the TMJ (jaw joint).",
          ]}
        />

        <SectionHeading>
          9. Shoulder Pain: Rotator Cuff Tears and Frozen Shoulder
        </SectionHeading>

        <Paragraph>
          Slouched posture causes weakening of the muscles supporting the
          shoulder joint, which predisposes to shoulder problems like torn
          rotator cuffs and frozen shoulder (adhesive capsulitis). The
          downwardly tilted scapula can&apos;t create enough space for the
          topmost tendon of the rotator cuff when the arm is lifted overhead,
          causing it to be pinched and damaged by the acromion.
        </Paragraph>

        <SectionHeading>
          10. Thoracic Outlet Syndrome — Numb Fingers, Hands and More
        </SectionHeading>

        <Paragraph>
          Night-time numbness and tingling in hands and arms are symptoms of
          Thoracic Outlet Compression Syndrome. This was one of the seemingly
          unrelated symptoms—along with headaches and big toe pain—that
          disappeared when posture improved. See the dedicated section below for
          more detail.
        </Paragraph>

        <SectionHeading>
          11. Aggravation of Big Toe Arthritis Pain
        </SectionHeading>

        <Paragraph>
          An enlarged, arthritic big toe joint (Hallux rigidus) was causing
          limited movement and pain while walking for over 15 years. After
          improving posture, the toe pain began to improve. Apparently,
          forward-leaning posture from flat back had been putting too much
          pressure on the arthritic big toe. With improved posture and awareness
          that weight should be distributed evenly between heel and forefoot,
          the big toe pain improved greatly.
        </Paragraph>

        <SectionHeading>12. Chronic Pain Worsens Posture</SectionHeading>

        <Paragraph>
          Any chronic pain, especially in the core areas of spine, shoulders,
          chest, and abdomen, seems to protectively tense up the front of the
          body, curling it into flexion. When we&apos;re in any kind of pain or
          feeling sick, most of us just want to curl up on the couch or in bed.
        </Paragraph>

        <Callout>
          <strong>An important lesson:</strong> When chronic illness and pain
          limit physical activity, making the effort to use good posture helps
          keep postural muscles strong and reduces the risk for increased neck,
          shoulder and back pain.
        </Callout>

        <Divider />

        <SectionHeading>More Posture Exercises</SectionHeading>

        <Callout>
          <strong>Always seek medical advice first</strong> when dealing with
          neck, back, hip or shoulder pain or functional limitations. Pain or
          muscle weakness may have any number of causes, one of which is severe
          nerve root or spinal cord impingement, which needs more than exercise
          or any passive therapies.
        </Callout>

        <SectionHeading>
          Exercises for Strengthening the Core
        </SectionHeading>

        <Paragraph>
          See the Off-Balance Workout at WebMD—activates deep-core muscles that
          support posture. Improves balance and helps prevent falls, especially
          important in reducing the risk of falls in the elderly with
          osteoporosis. Also provides weight bearing exercise to help increase
          bone density at the hip bones.
        </Paragraph>

        <SectionHeading>
          Deep Back Extensor Activation and Strengthening
        </SectionHeading>

        <Paragraph>
          <em>(after Johansen&apos;s multifidus exercise no. 1)</em>
        </Paragraph>

        <Paragraph>
          <strong>Purpose:</strong> To strengthen, and be able to locate and
          understand what activating the deep back extensors feels like.
        </Paragraph>

        <BulletList
          items={[
            "Stand (can be done sitting) and place one hand on the abdomen (at the belly button). Place the other hand on the lower back around waist level and feel for the vertical band of muscle alongside the spinal vertebrae.",
            "With one hand on the abdomen, squeeze the abdominal muscles and feel them tighten. With the other hand feel the lower-back muscles also tighten. (The multifidus co-activates with the rectus abdominis.)",
            "Hold for 3 to 5 seconds, relax, and repeat. Work up to 20 contractions, once a day.",
            "Eventually learn to tighten the multifidus all the way up the back and into the neck.",
          ]}
        />

        <Paragraph>
          <em>
            Multifidus: A series of small muscles that fill the groove on both
            sides of the spinous processes from the bottom of the lumbar spine
            to the top of the neck. Each small muscle spans from one to three
            vertebral joints, and as a whole, the multifidus helps interconnect
            and stabilize the entire spine.
          </em>
        </Paragraph>

        <SectionHeading>Back Extension Exercises</SectionHeading>

        <Paragraph>
          <strong>
            Single-leg extension hold while on hands and knees (Quadruped with
            Leg Lift):
          </strong>{" "}
          This exercise produces less low back spine compression (&lt; 2,500
          Newtons) on the facet joints than the Superman Extension (4,000 –
          6,000 N), and is recommended by Stuart McGill.
        </Paragraph>

        <BulletList
          items={[
            "Get down on hands and knees with palms flat on floor and shoulder width apart. Keep neck in line with back and maintain a neutral lumbar curve.",
            "Breathe out, and raise and straighten one leg, until in line with back.",
            "Hold for 10 seconds.",
            "Return to starting position and raise the other leg.",
            "Repeat every day and build endurance with more repetitions. McGill believes that endurance of back extensors protects the low back more than maximal load/strength.",
          ]}
        />

        <Paragraph>
          <strong>Back Extension and Osteoporosis:</strong> A Mayo Clinic study
          showed that people with osteoporosis who did only back extension
          exercises had decreased incidence of vertebral fractures even 10 years
          after; but those who did flexion exercises such as sit-ups had
          increased incidence of fractures. (Sinaki et al.)
        </Paragraph>

        <SectionHeading>
          Additional Upper Back Extension: Prone &quot;Y&quot;, &quot;T&quot;,
          &quot;W&quot; and &quot;L&quot;
        </SectionHeading>

        <Paragraph>
          Lie stomach down on floor, place arms in one of the positions, have
          thumbs pointing up, and keeping shoulders pulled down, squeeze the
          shoulder blades together while lifting arms and chest (1–2 inches
          only). Hold a few seconds then lower.
        </Paragraph>

        <BulletList
          items={[
            <>
              <strong>&quot;Y&quot;</strong> — Arms in a large Y shape, thumbs
              up, squeeze shoulder blades together while lifting.
            </>,
            <>
              <strong>&quot;T&quot;</strong> — Arms straight out at 3 and 9
              o&apos;clock.
            </>,
            <>
              <strong>&quot;W&quot;</strong> — Elbows tight to the body.
            </>,
            <>
              <strong>&quot;L&quot;</strong> — Elbows down at sides, forearms at
              90 degrees.
            </>,
          ]}
        />

        <Paragraph>
          Start with 8 reps, 3 to 4 times a week. Add 2 reps a week up to 12.
        </Paragraph>

        <SectionHeading>Transverse Abdominis Activation</SectionHeading>

        <Paragraph>
          Activation and strengthening of the transverse abdominis and
          multifidus muscles are important parts of the Australian spinal
          stabilization method. The transverse is a wide horizontal muscle that
          acts to flatten the abdominal wall. However, studies by Stuart McGill
          show that the transverse abdominis is not as important a spinal
          stabilizer as once thought.
        </Paragraph>

        <SectionHeading>
          Pectoralis Major and Pectoralis Minor Stretch
        </SectionHeading>

        <SectionHeading>Pec Minor Stretch</SectionHeading>

        <Paragraph>
          A unilateral corner stretch was found best at lengthening the
          pectoralis minor (Borstad and Ludewig, 2006).
        </Paragraph>

        <Paragraph>
          <strong>Precautions:</strong> Avoid forward rotation of shoulder and
          forward movement of the humeral head. Hold the shoulder back during
          the stretch. Do not overstretch the front of shoulder.
        </Paragraph>

        <BulletList
          items={[
            "Place the forearm against a door frame, elbow at a 90-degree angle to upper arm. Make sure shoulder is back.",
            "Rotate the body away from the arm by walking the feet around until a stretch is felt at the upper corner of the chest (about 45 degrees).",
            "Hold for 10 seconds.",
            "Repeat 3 times.",
            "Switch to the other arm.",
          ]}
        />

        <SectionHeading>
          Thumbs-up, Palms-up, Front Shoulder and Chest Stretch
        </SectionHeading>

        <BulletList
          items={[
            "Hold arms straight out to the side just a little lower than shoulder height, elbows slightly bent, thumbs up, palms facing front.",
            "Squeeze shoulder blades together and rotate shoulders and arms back to stretch the front of the shoulder, hold 10 seconds.",
            "Return to starting point, but rotate thumbs to the back so palms face up, and at the same time lift the chest.",
            "Squeeze shoulder blades together and pull shoulders and arms back to a front shoulder stretch, hold ten seconds and repeat. 2 to 3 sets every morning.",
          ]}
        />

        <SectionHeading>
          Convert to Resistance Band Exercise (Similar to Brugger Exercise)
        </SectionHeading>

        <BulletList
          items={[
            "Knot a resistance band so there's a loop at each end.",
            "Starting position: Thumbs up, elbows at 90 degrees, palms facing each other, and the loops across the palm.",
            "Pull hands apart by squeezing the shoulder blades together and rotating the shoulders outward.",
            "When the band begins to stretch, very slowly continue pulling the arms apart.",
            "Straighten the elbows and slowly pull the arms to the back as far as comfortable. Hold at least 4 seconds.",
          ]}
        />

        <Paragraph>
          Take at least 6 seconds to pull the arms apart after band tightens,
          hold 4 seconds and take another 6 seconds to return. Repeat several
          times or until muscles become too fatigued. Make the band shorter or
          advance to a stronger resistance band if 25 repetitions becomes too
          easy.
        </Paragraph>

        <Divider />

        <SectionHeading>Thoracic Outlet Syndrome</SectionHeading>

        <SectionHeading>
          1. Symptoms of Thoracic Outlet Syndrome
        </SectionHeading>

        <Paragraph>
          <strong>Thoracic Outlet:</strong> The narrow passage between clavicle
          and ribs through which nerves and blood vessels pass to the arm.
        </Paragraph>

        <Paragraph>
          The Thoracic Outlet is a narrow passageway between the collarbone
          (clavicle) and ribs that the subclavian artery and vein, and the
          brachial plexus (a network of nerve fibers formed from the lower 4
          cervical and first thoracic nerve roots) must travel through to get to
          the arm. The nerves of the brachial plexus control most arm and hand
          muscles, and receive sensory input from the skin and muscles of the
          arm.
        </Paragraph>

        <Paragraph>
          Symptoms include numbness, tingling, weakness, and coldness of hands
          and arms. Night-time numbness and tingling in hands and arms are
          common symptoms.
        </Paragraph>

        <SectionHeading>
          2. Poor Posture and Thoracic Outlet Syndrome
        </SectionHeading>

        <Paragraph>
          Hunched posture and downwardly tilted shoulder blades cause tightness
          in front shoulder muscles; this narrows the thoracic outlet in the
          shoulder and may compress the brachial plexus and/or subclavian artery
          that runs through it. Most patients improve with therapy for posture
          and muscle imbalance.
        </Paragraph>

        <Paragraph>
          <strong>Coracoid Process Syndrome:</strong> A similar condition where
          the brachial plexus is compressed by the coracoid process of the
          shoulder blade, which in hunched posture has been pulled forward and
          down by a tight pectoralis minor. Symptoms include pain down the arm
          with slight pressure over the area of the coracoid, and pain that
          worsens with weight on the shoulders from a backpack or purse. The
          upper trapezius is often in &quot;protective spasm&quot; trying to
          lift the shoulder girdle off the nerve bundle. First line of treatment
          is to realign posture and shoulder blade position.
        </Paragraph>

        <SectionHeading>3. Depressed/Droopy Shoulders</SectionHeading>

        <Paragraph>
          In depressed shoulders, the clavicle is horizontal or slopes down to
          the end of shoulder. There are two areas of possible nerve and blood
          vessel compression: 1) between clavicle and first rib, and 2) between
          the coracoid/short tight pectoralis minor and the 3rd through 5th
          ribs. The upper trapezius is stretched and weakened, but protectively
          spasms to lift the clavicle off compromised structures.
        </Paragraph>

        <Paragraph>
          Another possible cause of arm pain is an &quot;Elevated First
          Rib&quot; which would predispose to compression under the collarbone.
          The first rib elevates by action of the anterior and middle scalene
          muscles.
        </Paragraph>

        <SectionHeading>4. Scalenus Syndrome</SectionHeading>

        <Paragraph>
          The anterior and middle scalenes are involved in a third possible area
          of thoracic outlet compression. Between them is a narrow area through
          which the brachial nerves and subclavian artery travel before passing
          under the collarbone. Turning the head, which causes twisting of the
          neck, narrows the passageway but rarely causes symptoms unless there
          are predisposing factors including: presence of a cervical rib,
          enlargement of the scalenes due to exercise, and chronic
          tightness/spasm.
        </Paragraph>

        <Divider />

        <Paragraph>
          <em>
            Archived from fixtheneck.com — Originally authored by a former
            chronic neck pain patient
          </em>
        </Paragraph>

        <Callout>
          This content is preserved for educational purposes. Always consult a
          qualified healthcare professional before beginning any exercise
          program.
        </Callout>
      </>
    ),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
