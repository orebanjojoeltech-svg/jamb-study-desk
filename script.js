const curriculum = {
	JSS1: {
		terms: [
			{ title: 'Number foundations', description: 'Build confidence with numbers, fractions and the way they connect.', topics: [
				{ title: 'Whole numbers & numeration', summary: 'Read, write, compare and calculate with whole numbers.', notes: ['Use place value to read large numbers, from units through millions.', 'Compare numbers by checking the first place where their digits differ.', 'Use the four operations and follow brackets before other operations.'], example: 'Work out 4,208 + 1,675. Add by place value: 4,208 + 1,675 = 5,883.', questions: [['Write 63,405 in words.', 'Sixty-three thousand, four hundred and five.', 'Read each place from left to right, grouping digits in threes.'], ['Find 8,976 + 3,458.', '12,434.', 'Add the columns from ones to thousands, carrying when a total reaches 10.'], ['Evaluate 36 ÷ 4 + 7 × 3.', '30.', 'Do division and multiplication first: 9 + 21 = 30.']] },
				{ title: 'Factors, multiples & primes', summary: 'Explore divisibility, prime numbers, HCF and LCM.', notes: ['A factor divides a number exactly; a multiple is found by multiplying it.', 'A prime number has exactly two factors: 1 and itself.', 'HCF is the greatest shared factor; LCM is the smallest shared multiple.'], example: 'Factors of 12 are 1, 2, 3, 4, 6, 12. Factors of 18 include 1, 2, 3, 6, 9, 18, so their HCF is 6.', questions: [['List all the factors of 20.', '1, 2, 4, 5, 10 and 20.', 'Check every whole number that divides 20 with no remainder.'], ['Is 29 prime or composite?', 'Prime.', '29 has no divisors other than 1 and 29.'], ['Find the LCM of 4 and 6.', '12.', 'Multiples of 4: 4, 8, 12. Multiples of 6: 6, 12. The first shared one is 12.']] },
				{ title: 'Common fractions', summary: 'Name, compare, simplify and calculate with fractions.', notes: ['The denominator shows the number of equal parts; the numerator counts the parts used.', 'Simplify by dividing numerator and denominator by their HCF.', 'For addition or subtraction, use a common denominator.'], example: '2/3 + 1/6 = 4/6 + 1/6 = 5/6.', questions: [['Simplify 12/18.', '2/3.', 'Divide both 12 and 18 by their HCF, 6.'], ['Calculate 3/8 + 1/4.', '5/8.', 'Rewrite 1/4 as 2/8, then add: 3/8 + 2/8 = 5/8.'], ['Find 2/5 of 30.', '12.', '2/5 × 30 = 2 × 6 = 12.']] },
				{ title: 'Decimals & percentages', summary: 'Connect tenths and hundredths to fractions and percent.', notes: ['Digits after the decimal point show tenths, hundredths, thousandths and so on.', 'Percent means “out of 100”. Convert a percent to a decimal by dividing by 100.', 'To find a percentage of an amount, multiply by the percentage as a decimal.'], example: '25% of 80 = 0.25 × 80 = 20.', questions: [['Write 0.6 as a fraction in simplest form.', '3/5.', '0.6 = 6/10; divide top and bottom by 2.'], ['Change 3/4 to a percentage.', '75%.', '3/4 = 0.75, and 0.75 × 100 = 75%.'], ['Find 15% of 200.', '30.', '10% is 20 and 5% is 10, so 15% is 30.']] }
			] },
			{ title: 'Number sense & expressions', description: 'Use signs, estimates, ratios and algebra to describe number relationships.', topics: [
				{ title: 'Directed numbers', summary: 'Work with positive and negative numbers on a number line.', notes: ['Positive numbers lie to the right of zero; negative numbers lie to the left.', 'Adding a negative is like subtracting; subtracting a negative is like adding.', 'For multiplication, equal signs give a positive product and unlike signs a negative product.'], example: '−3 + 8 = 5 because moving 8 places right from −3 lands on 5.', questions: [['Evaluate −7 + 12.', '5.', 'Start at −7 and move 12 places to the right.'], ['Evaluate 4 − (−6).', '10.', 'Subtracting a negative is equivalent to adding: 4 + 6.'], ['Calculate (−3) × 5.', '−15.', 'Unlike signs give a negative product; 3 × 5 = 15.']] },
				{ title: 'Estimation & approximation', summary: 'Round numbers and use estimates to check calculations.', notes: ['To round to a place, look at the digit immediately to its right.', 'Digits 0–4 keep the rounding digit; digits 5–9 increase it by one.', 'An estimate is a quick check, not an exact answer.'], example: 'Round 6,483 to the nearest hundred. The tens digit is 8, so the answer is 6,500.', questions: [['Round 3,748 to the nearest ten.', '3,750.', 'The units digit is 8, so raise the tens digit by one.'], ['Round 0.684 to 2 decimal places.', '0.68.', 'The third decimal digit is 4, so the hundredths digit stays the same.'], ['Estimate 49 × 21 by rounding each factor to 1 significant figure.', 'About 1,000.', '49 ≈ 50 and 21 ≈ 20; 50 × 20 = 1,000.']] },
				{ title: 'Ratio & proportion', summary: 'Compare quantities and share amounts in a given ratio.', notes: ['A ratio compares quantities in the same units.', 'Simplify a ratio by dividing each part by their common factor.', 'For sharing, add ratio parts, divide the total by that sum, then multiply by each part.'], example: 'Share 24 in the ratio 1:3. There are 4 parts; each is 6, so the shares are 6 and 18.', questions: [['Simplify the ratio 15:25.', '3:5.', 'Divide both parts by 5.'], ['Share 40 in the ratio 3:2.', '24 and 16.', 'There are 5 parts; 40 ÷ 5 = 8 per part. Then 3 × 8 = 24 and 2 × 8 = 16.'], ['If 4 exercise books cost ₦600, what do 2 cost at the same rate?', '₦300.', 'One book costs ₦600 ÷ 4 = ₦150; two cost ₦300.']] },
				{ title: 'Algebraic expressions', summary: 'Use letters for numbers and simplify like terms.', notes: ['A variable is a letter that represents a number.', 'Like terms have the same variable part and powers; only like terms combine.', 'Substitute a number for each variable to evaluate an expression.'], example: 'Simplify 4a + 3 − a + 2 = 3a + 5.', questions: [['Simplify 7x − 2x + 4.', '5x + 4.', 'Combine the like terms 7x and −2x.'], ['Evaluate 3a + 2 when a = 5.', '17.', 'Substitute: 3(5) + 2 = 15 + 2.'], ['Write “8 more than n” as an expression.', 'n + 8.', '“More than” means add 8 to n.']] }
			] },
			{ title: 'Shape, measure & data', description: 'Meet the geometry, measurement and data skills used every day.', topics: [
				{ title: 'Simple equations', summary: 'Find an unknown by keeping both sides of an equation balanced.', notes: ['An equation says that two expressions have the same value.', 'Use inverse operations to isolate the unknown.', 'Whatever operation you apply to one side, apply to the other side too.'], example: 'For x + 7 = 19, subtract 7 from both sides: x = 12.', questions: [['Solve x − 6 = 11.', 'x = 17.', 'Add 6 to both sides.'], ['Solve 4y = 28.', 'y = 7.', 'Divide both sides by 4.'], ['Solve 2a + 3 = 13.', 'a = 5.', 'Subtract 3 to get 2a = 10, then divide by 2.']] },
				{ title: 'Lines & angles', summary: 'Name angle types and use facts about straight lines and turns.', notes: ['An acute angle is less than 90°; a right angle is 90°; an obtuse angle is between 90° and 180°.', 'Angles on a straight line add to 180°; angles around a point add to 360°.', 'A full turn is 360° and a half turn is 180°.'], example: 'If one angle on a straight line is 125°, the other is 180° − 125° = 55°.', questions: [['What type of angle is 42°?', 'Acute.', '42° is less than a right angle (90°).'], ['One angle on a straight line is 68°. Find the other.', '112°.', 'Angles on a straight line total 180°: 180° − 68° = 112°.'], ['How many degrees are in a full turn?', '360°.', 'A full turn returns to the starting direction.']] },
				{ title: '2D shapes & construction', summary: 'Classify polygons and practise accurate ruler-and-compass constructions.', notes: ['A polygon is a closed plane shape made from straight line segments.', 'A triangle has 3 sides; a quadrilateral has 4; a pentagon has 5.', 'Use a ruler for straight edges and a compass to transfer equal lengths or draw arcs.'], example: 'A regular hexagon has six equal sides and six equal angles.', questions: [['How many sides does an octagon have?', '8 sides.', '“Octa” means eight.'], ['Name a quadrilateral with exactly one pair of parallel sides.', 'A trapezium (trapezoid).', 'It has one pair of parallel sides; naming varies by convention.'], ['What tools construct a 60° angle accurately?', 'A ruler and compass.', 'Compass arcs create equal radii, giving the 60° angle of an equilateral-triangle construction.']] },
				{ title: 'Length, perimeter & area', summary: 'Measure lengths and find the distance around or space inside shapes.', notes: ['Perimeter is the total distance around a 2D shape.', 'Rectangle perimeter = 2(length + width); rectangle area = length × width.', 'Keep units consistent: 1 m = 100 cm and 1 cm = 10 mm.'], example: 'A rectangle 8 cm by 3 cm has perimeter 2(8 + 3) = 22 cm and area 8 × 3 = 24 cm².', questions: [['Find the perimeter of a square with side 6 cm.', '24 cm.', 'A square has four equal sides: 4 × 6 = 24 cm.'], ['Find the area of a 9 m by 4 m rectangle.', '36 m².', 'Area = length × width = 9 × 4.'], ['Convert 2.5 m to centimetres.', '250 cm.', 'Multiply metres by 100: 2.5 × 100 = 250.']] },
				{ title: 'Data & averages', summary: 'Organise data and describe it using mean, median and mode.', notes: ['A frequency table records how often each value occurs.', 'Mean = sum of values ÷ number of values; median is the middle after sorting.', 'Mode is the most frequent value. A bar chart compares categories with separated bars.'], example: 'For 2, 3, 3, 8: mean = 16 ÷ 4 = 4, median = (3 + 3) ÷ 2 = 3, and mode = 3.', questions: [['Find the mean of 4, 6 and 8.', '6.', 'Add the values (18) and divide by 3.'], ['Find the median of 9, 2, 5, 7, 1.', '5.', 'Sort: 1, 2, 5, 7, 9. The middle value is 5.'], ['What is the mode of 2, 4, 4, 5, 7?', '4.', '4 appears more often than any other value.']] }
			] }
		]
	},
	JSS2: {
		terms: [
			{ title: 'Numbers in action', description: 'Extend number skills into bases, rates, percentages and financial maths.', topics: [
				{ title: 'Number bases', summary: 'Understand place value in bases other than ten.', notes: ['In base 10, place values are powers of 10; in base 2, they are powers of 2.', 'Digits in base b range from 0 to b − 1.', 'Convert to base ten by multiplying each digit by its place value.'], example: '1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = 11₁₀.', questions: [['Convert 101₂ to base ten.', '5₁₀.', '1×4 + 0×2 + 1×1 = 5.'], ['Write 13₁₀ in base two.', '1101₂.', '13 = 8 + 4 + 1, so the binary place digits are 1101.'], ['What is the largest digit allowed in base 5?', '4.', 'Base 5 uses the digits 0, 1, 2, 3 and 4.']] },
				{ title: 'Fractions & decimals', summary: 'Calculate confidently with mixed numbers, fractions and decimals.', notes: ['For unlike denominators, find a common denominator before adding or subtracting.', 'To multiply fractions, multiply numerators and multiply denominators.', 'To divide by a fraction, multiply by its reciprocal.'], example: '1½ × 2/3 = 3/2 × 2/3 = 1.', questions: [['Calculate 5/6 − 1/4.', '7/12.', 'Use denominator 12: 10/12 − 3/12 = 7/12.'], ['Calculate 3/5 × 10/9.', '2/3.', 'Cancel common factors or multiply: 30/45 = 2/3.'], ['Calculate 2.4 ÷ 0.6.', '4.', 'Multiply both numbers by 10: 24 ÷ 6 = 4.']] },
				{ title: 'Ratio, rate & proportion', summary: 'Solve scale, speed and direct proportion problems.', notes: ['A rate compares quantities with different units, such as kilometres per hour.', 'Speed = distance ÷ time; distance = speed × time.', 'In direct proportion, multiplying one quantity by a factor multiplies the other by the same factor.'], example: 'A bus travels 150 km in 3 hours. Its average speed is 150 ÷ 3 = 50 km/h.', questions: [['A cyclist rides 36 km in 2 hours. Find the average speed.', '18 km/h.', 'Speed = distance ÷ time = 36 ÷ 2.'], ['If 5 kg of rice costs ₦4,000, what is the cost of 2 kg at the same rate?', '₦1,600.', 'Unit price is ₦4,000 ÷ 5 = ₦800 per kg; 2 kg costs ₦1,600.'], ['A map scale is 1 cm to 5 km. What real distance is shown by 7 cm?', '35 km.', 'Multiply 7 cm by 5 km per centimetre.']] },
				{ title: 'Percentages & financial maths', summary: 'Apply percentages to discounts, profit, loss and simple interest.', notes: ['Percentage change = change ÷ original amount × 100%.', 'Profit = selling price − cost price; loss = cost price − selling price.', 'Simple interest = principal × rate × time ÷ 100.'], example: 'A ₦5,000 item is discounted by 10%. Discount = ₦500, so the sale price is ₦4,500.', questions: [['Find 12% of ₦2,500.', '₦300.', '0.12 × 2,500 = 300.'], ['An item costs ₦800 and sells for ₦1,000. Find the profit percentage.', '25%.', 'Profit = ₦200; 200 ÷ 800 × 100% = 25%.'], ['Find simple interest on ₦6,000 at 5% per year for 2 years.', '₦600.', 'I = 6,000 × 5 × 2 ÷ 100 = 600.']] },
				{ title: 'Approximation & standard form', summary: 'Use significant figures and write large or small numbers compactly.', notes: ['Significant figures start at the first non-zero digit.', 'Standard form is a × 10ⁿ, where 1 ≤ a < 10 and n is an integer.', 'Estimate calculations by rounding values to convenient numbers.'], example: '450,000 = 4.5 × 10⁵ in standard form.', questions: [['Round 0.006384 to 2 significant figures.', '0.0064.', 'The first two significant digits are 6 and 3; the next digit 8 rounds 3 up to 4.'], ['Write 72,000 in standard form.', '7.2 × 10⁴.', 'Move the decimal point four places left to get 7.2.'], ['Calculate (3 × 10²)(2 × 10³).', '6 × 10⁵.', 'Multiply coefficients (3×2) and add exponents (2+3).']] }
			] },
			{ title: 'Algebra & geometry', description: 'Represent patterns with algebra and reason about shapes and angles.', topics: [
				{ title: 'Algebraic operations', summary: 'Expand brackets, collect like terms and factorise expressions.', notes: ['Use the distributive law: a(b + c) = ab + ac.', 'Collect like terms only after expanding brackets.', 'Factorising reverses expansion by taking out a common factor.'], example: '3(x + 4) − 2x = 3x + 12 − 2x = x + 12.', questions: [['Expand 4(2x − 3).', '8x − 12.', 'Multiply 4 by both terms inside the bracket.'], ['Simplify 5a + 3 − 2a + 7.', '3a + 10.', 'Combine a-terms and constants separately.'], ['Factorise 6x + 9.', '3(2x + 3).', 'The highest common factor of 6x and 9 is 3.']] },
				{ title: 'Equations & inequalities', summary: 'Solve linear equations and represent inequalities.', notes: ['Use inverse operations to isolate the variable in an equation.', 'An inequality uses <, >, ≤ or ≥ to compare values.', 'When multiplying or dividing an inequality by a negative number, reverse its sign.'], example: '3x − 4 = 11 gives 3x = 15, so x = 5.', questions: [['Solve 5x + 2 = 27.', 'x = 5.', 'Subtract 2 to get 5x = 25; divide by 5.'], ['Solve 2(y − 3) = 10.', 'y = 8.', 'Divide by 2: y − 3 = 5; add 3.'], ['Solve x + 4 < 9.', 'x < 5.', 'Subtract 4 from both sides.']] },
				{ title: 'Angles & polygons', summary: 'Use angle facts to solve problems with parallel lines and polygons.', notes: ['Vertically opposite angles are equal; corresponding angles on parallel lines are equal.', 'Interior angles of a triangle total 180°; of a quadrilateral, 360°.', 'Interior-angle sum of an n-sided polygon is (n − 2) × 180°.'], example: 'Each interior angle of a regular hexagon is (6 − 2) × 180° ÷ 6 = 120°.', questions: [['Two angles in a triangle are 48° and 67°. Find the third.', '65°.', 'Triangle angles total 180°: 180 − 48 − 67 = 65°.'], ['Find the sum of the interior angles of a pentagon.', '540°.', '(5 − 2) × 180° = 540°.'], ['A vertically opposite angle is 73°. Find the matching angle.', '73°.', 'Vertically opposite angles are equal.']] },
				{ title: 'Triangles & quadrilaterals', summary: 'Classify polygons by their sides, angles and properties.', notes: ['Triangles can be equilateral, isosceles or scalene by side lengths.', 'A parallelogram has opposite sides parallel and equal; a rectangle has four right angles.', 'A rhombus has four equal sides; a square has four equal sides and four right angles.'], example: 'A triangle with sides 5 cm, 5 cm and 8 cm is isosceles because two sides are equal.', questions: [['What is each angle in an equilateral triangle?', '60°.', 'The three equal angles total 180°, so each is 180° ÷ 3.'], ['Name a quadrilateral with four right angles and opposite sides equal.', 'A rectangle.', 'A square also has these properties, but additionally all sides are equal.'], ['A parallelogram has one angle of 110°. Find an adjacent angle.', '70°.', 'Adjacent angles in a parallelogram are supplementary: 180° − 110° = 70°.']] },
				{ title: 'Geometric construction & bearings', summary: 'Construct triangles and describe direction using three-figure bearings.', notes: ['A bearing is measured clockwise from north and written with three digits.', 'Use a ruler and compass to construct triangles from given side lengths.', 'A scale drawing represents real distances using a fixed scale.'], example: 'A direction of 45° clockwise from north is written as a bearing of 045°.', questions: [['Write the bearing for due east.', '090°.', 'Bearings start at north (000°) and turn clockwise.'], ['Write the bearing for due south.', '180°.', 'South is a half-turn clockwise from north.'], ['A scale is 1 cm to 4 m. What length represents 20 m?', '5 cm.', 'Divide the real length by the scale factor: 20 ÷ 4 = 5 cm.']] }
			] },
			{ title: 'Measure, data & chance', description: 'Measure 2D and 3D shapes, analyse data and explore chance.', topics: [
				{ title: 'Perimeter, area & circles', summary: 'Calculate perimeters and areas of common plane shapes.', notes: ['Triangle area = ½ × base × perpendicular height.', 'Parallelogram area = base × perpendicular height.', 'Circle circumference = 2πr; circle area = πr². Use π ≈ 22/7 or 3.142.'], example: 'A circle of radius 7 cm has circumference 2 × 22/7 × 7 = 44 cm.', questions: [['Find the area of a triangle with base 10 cm and height 6 cm.', '30 cm².', 'Area = ½ × 10 × 6.'], ['Find the circumference of a circle with radius 3.5 cm, using π = 22/7.', '22 cm.', 'C = 2πr = 2 × 22/7 × 3.5 = 22 cm.'], ['Find the area of a circle of radius 7 cm, using π = 22/7.', '154 cm².', 'A = πr² = 22/7 × 7 × 7 = 154 cm².']] },
				{ title: 'Volume & surface area', summary: 'Measure capacity and find the volume of common solids.', notes: ['Cuboid volume = length × width × height.', 'Prism volume = area of cross-section × length.', '1 cm³ = 1 mL; 1,000 cm³ = 1 L. Surface area is the total area of the outside faces.'], example: 'A cuboid 5 cm × 3 cm × 4 cm has volume 5 × 3 × 4 = 60 cm³.', questions: [['Find the volume of a cube with side 4 cm.', '64 cm³.', 'Volume = side³ = 4 × 4 × 4.'], ['A cuboid measures 8 cm by 3 cm by 2 cm. Find its volume.', '48 cm³.', 'Multiply length × width × height = 8 × 3 × 2.'], ['Convert 2.5 L to millilitres.', '2,500 mL.', 'Multiply litres by 1,000.']] },
				{ title: 'Statistics & data displays', summary: 'Compare data sets and choose suitable tables and charts.', notes: ['Organise raw data into a frequency table before drawing a chart.', 'A pie chart represents a total of 360°; sector angle = frequency ÷ total × 360°.', 'Range = greatest value − least value. The mean is affected by extreme values.'], example: 'In a group of 20, 5 choose football. The pie-chart angle is 5/20 × 360° = 90°.', questions: [['Find the range of 12, 5, 19, 8, 14.', '14.', 'Range = 19 − 5 = 14.'], ['In a class of 30, 10 pupils walk to school. What is the pie-chart angle?', '120°.', '10/30 × 360° = 120°.'], ['Find the mean of 3, 5, 7, 9 and 11.', '7.', 'The total is 35; 35 ÷ 5 = 7.']] },
				{ title: 'Probability', summary: 'Describe likelihood and calculate probabilities for simple events.', notes: ['Probability = number of favourable outcomes ÷ total possible outcomes.', 'A probability is between 0 (impossible) and 1 (certain).', 'For equally likely outcomes, list the sample space to avoid missing possibilities.'], example: 'A fair die has 3 even faces out of 6, so P(even) = 3/6 = 1/2.', questions: [['What is the probability of getting heads when a fair coin is tossed?', '1/2.', 'There is 1 favourable outcome among 2 equally likely outcomes.'], ['A bag has 3 red and 5 blue counters. Find P(red).', '3/8.', 'There are 3 red counters out of 8 counters altogether.'], ['What is the probability of rolling a number greater than 4 on a fair six-sided die?', '1/3.', 'The favourable results are 5 and 6: 2/6 = 1/3.']] },
				{ title: 'Coordinates, graphs & symmetry', summary: 'Plot points, read simple linear graphs and recognise symmetry.', notes: ['Coordinates are written (x, y): move horizontally first, then vertically.', 'A straight-line graph can show how two quantities change together.', 'A line of symmetry divides a shape into two matching reflected halves.'], example: 'The point (−2, 3) is 2 units left and 3 units up from the origin.', questions: [['In which quadrant is the point (3, −2)?', 'Quadrant IV.', 'x is positive and y is negative.'], ['Complete the table for y = 2x + 1 when x = 0, 1, 2.', 'y = 1, 3, 5.', 'Substitute each x-value into 2x + 1.'], ['How many lines of symmetry does a non-square rectangle have?', '2.', 'One vertical and one horizontal line through its centre divide it into matching halves.']] }
			] }
		]
	}
};

const termLabels = ['Term 1', 'Term 2', 'Term 3'];
const termDescriptions = {
	JSS1: ['Build confidence with numbers, fractions and the way they connect.', 'Use signs, estimates, ratios and algebra to describe number relationships.', 'Meet the geometry, measurement and data skills used every day.'],
	JSS2: ['Extend number skills into bases, rates, percentages and financial maths.', 'Represent patterns with algebra and reason about shapes and angles.', 'Measure 2D and 3D shapes, analyse data and explore chance.']
};
const storageKey = 'maths-made-easy-completed-v1';
let currentClass = 'JSS1';
let currentTerm = 0;
let selectedTopic = null;
let searchQuery = '';
let toastTimer;
let completedTopics = new Set();
try { completedTopics = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]')); } catch { completedTopics = new Set(); }

const topicNav = document.querySelector('#topic-nav');
const topicGrid = document.querySelector('#topic-grid');
const focusPanel = document.querySelector('#focus-panel');
const searchInput = document.querySelector('#topic-search');

function termData() { return curriculum[currentClass].terms[currentTerm]; }
function currentTopics() { return termData().topics; }
function topicKey(topic) { return `${currentClass}-${currentTerm}-${topic.title}`; }
function allTopics() { return curriculum[currentClass].terms.flatMap((term, termIndex) => term.topics.map(topic => ({ ...topic, termIndex }))); }

function render() {
	const term = termData();
	const topics = currentTopics();
	document.querySelector('#breadcrumb-class').textContent = currentClass.replace('JSS', 'JSS ');
	document.querySelector('#term-kicker').textContent = `${currentClass.replace('JSS', 'JSS ')} · ${termLabels[currentTerm].toUpperCase()}`;
	document.querySelector('#term-title').textContent = term.title;
	document.querySelector('#term-description').textContent = termDescriptions[currentClass][currentTerm];
	document.querySelector('#stat-topics').textContent = String(topics.length).padStart(2, '0');
	document.querySelector('#stat-questions').textContent = String(topics.reduce((sum, topic) => sum + topic.questions.length, 0)).padStart(2, '0');
	const matchingTopics = topics.filter(topic => `${topic.title} ${topic.summary}`.toLowerCase().includes(searchQuery));
	document.querySelector('#topic-count').textContent = String(topics.length).padStart(2, '0');
	document.querySelector('#topic-range').textContent = matchingTopics.length ? `01 — ${String(matchingTopics.length).padStart(2, '0')}` : '00 TOPICS';
	topicNav.innerHTML = topics.map((topic, index) => `<button class="topic-nav-link${selectedTopic === topic.title ? ' is-active' : ''}" data-topic="${escapeAttribute(topic.title)}"><span class="topic-nav-number">${String(index + 1).padStart(2, '0')}</span><span>${escapeHTML(topic.title)}</span></button>`).join('');
	topicGrid.innerHTML = matchingTopics.length ? matchingTopics.map(topic => {
		const index = topics.indexOf(topic) + 1;
		const done = completedTopics.has(topicKey(topic));
		return `<button class="topic-card${selectedTopic === topic.title ? ' is-selected' : ''}${done ? ' is-complete' : ''}" data-topic="${escapeAttribute(topic.title)}" style="animation-delay:${(index - 1) * 45}ms"><span class="card-top"><span class="card-number">TOPIC ${String(index).padStart(2, '0')}</span><span class="card-status" aria-label="${done ? 'Completed' : 'Not completed'}">${done ? '✓' : '↗'}</span></span><h3>${escapeHTML(topic.title)}</h3><p>${escapeHTML(topic.summary)}</p><span class="card-arrow" aria-hidden="true">↗</span></button>`;
	}).join('') : '<p class="no-results">No topics match that search. Try another word.</p>';
	renderProgress();
	if (selectedTopic && topics.some(topic => topic.title === selectedTopic)) renderLesson(selectedTopic);
	else if (selectedTopic) { selectedTopic = null; showEmptyLesson(); }
	else showEmptyLesson();
}

function renderProgress() {
	const topics = allTopics();
	const done = topics.filter(topic => completedTopics.has(`${currentClass}-${topic.termIndex}-${topic.title}`)).length;
	const percent = topics.length ? Math.round(done / topics.length * 100) : 0;
	document.querySelector('#progress-ring').style.setProperty('--progress', `${percent * 3.6}deg`);
	document.querySelector('#progress-ring').setAttribute('aria-label', `${percent} percent complete`);
	document.querySelector('#progress-percent').textContent = `${percent}%`;
	document.querySelector('#progress-detail').textContent = `${done} of ${topics.length} topics`;
}

function renderLesson(title) {
	const topic = currentTopics().find(item => item.title === title);
	if (!topic) return;
	const done = completedTopics.has(topicKey(topic));
	focusPanel.className = 'focus-panel has-lesson is-open';
	focusPanel.innerHTML = `<div class="focus-topline"><span class="focus-tag">${currentClass.replace('JSS', 'JSS ')} · ${termLabels[currentTerm].toUpperCase()}</span><button class="focus-close" id="focus-close" aria-label="Close lesson panel" title="Close lesson panel">×</button></div><div class="lesson-scroll"><p class="lesson-number">TOPIC ${String(currentTopics().indexOf(topic) + 1).padStart(2, '0')}</p><h2>${escapeHTML(topic.title)}</h2><p class="lesson-summary">${escapeHTML(topic.summary)}</p><h3 class="lesson-section-title">Key ideas</h3><ul class="lesson-notes">${topic.notes.map(note => `<li>${escapeHTML(note)}</li>`).join('')}</ul><h3 class="lesson-section-title">Worked example</h3><div class="example-box"><strong>Try this</strong>${escapeHTML(topic.example)}</div><h3 class="lesson-section-title">Practice · ${topic.questions.length} questions</h3><div class="question-list">${topic.questions.map((question, index) => `<div class="question-item"><p class="question-prompt"><span class="question-index">${String(index + 1).padStart(2, '0')}</span>${escapeHTML(question[0])}</p><button class="answer-toggle" aria-expanded="false" data-answer="${index}">Show working +</button><div class="answer-content" hidden><span class="answer-working-label">Working</span><span>${escapeHTML(question[2])}</span><strong class="answer-final"><span class="answer-final-label">Answer</span>${escapeHTML(question[1])}</strong></div></div>`).join('')}</div><button class="complete-button${done ? ' is-complete' : ''}" data-complete="${escapeAttribute(topic.title)}">${done ? '✓ Topic completed' : 'Mark topic complete'}</button></div>`;
}

function showEmptyLesson() {
	focusPanel.className = 'focus-panel';
	focusPanel.innerHTML = '<div class="focus-topline"><span class="focus-tag">UP NEXT</span><button class="focus-close" id="focus-close" aria-label="Close lesson panel" title="Close lesson panel">×</button></div><p class="focus-empty-mark" aria-hidden="true">∠</p><p class="eyebrow">PICK A TOPIC</p><h2>Your next<br>big idea.</h2><p class="focus-empty-copy">Choose any topic to open its lesson, explore an example, and try the practice questions.</p><div class="focus-doodle" aria-hidden="true"><span>3</span><span>+</span><span>4</span><span>=</span><span>?</span></div>';
}

function setClass(className) {
	currentClass = className;
	selectedTopic = null;
	document.querySelectorAll('.class-button').forEach(button => {
		const active = button.dataset.class === currentClass;
		button.classList.toggle('is-active', active);
		button.setAttribute('aria-pressed', String(active));
	});
	render();
}

function setTerm(termIndex) {
	currentTerm = Number(termIndex);
	selectedTopic = null;
	document.querySelectorAll('.term-button').forEach(button => {
		const active = Number(button.dataset.term) === currentTerm + 1;
		button.classList.toggle('is-active', active);
		button.setAttribute('aria-pressed', String(active));
	});
	render();
}

function selectTopic(title) {
	selectedTopic = title;
	render();
	if (window.matchMedia('(max-width: 760px)').matches) focusPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function escapeHTML(value) {
	return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}
function escapeAttribute(value) { return escapeHTML(value); }

function showToast(message) {
	const toast = document.querySelector('#toast');
	toast.textContent = message;
	toast.classList.add('is-visible');
	clearTimeout(toastTimer);
	toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

document.querySelector('.class-switch').addEventListener('click', event => {
	const button = event.target.closest('[data-class]');
	if (button) setClass(button.dataset.class);
});
document.querySelector('.term-switch').addEventListener('click', event => {
	const button = event.target.closest('[data-term]');
	if (button) setTerm(Number(button.dataset.term) - 1);
});
topicNav.addEventListener('click', event => {
	const button = event.target.closest('[data-topic]');
	if (button) selectTopic(button.dataset.topic);
});
topicGrid.addEventListener('click', event => {
	const button = event.target.closest('[data-topic]');
	if (button) selectTopic(button.dataset.topic);
});
focusPanel.addEventListener('click', event => {
	if (event.target.closest('#focus-close')) {
		selectedTopic = null;
		showEmptyLesson();
		return;
	}
	const answerButton = event.target.closest('.answer-toggle');
	if (answerButton) {
		const answer = answerButton.nextElementSibling;
		const expanded = answerButton.getAttribute('aria-expanded') === 'true';
		answerButton.setAttribute('aria-expanded', String(!expanded));
		answerButton.textContent = expanded ? 'Show working +' : 'Hide working −';
		answer.hidden = expanded;
		return;
	}
	const completeButton = event.target.closest('[data-complete]');
	if (completeButton) {
		const topic = currentTopics().find(item => item.title === completeButton.dataset.complete);
		const key = topicKey(topic);
		if (completedTopics.has(key)) completedTopics.delete(key);
		else completedTopics.add(key);
		localStorage.setItem(storageKey, JSON.stringify([...completedTopics]));
		render();
		showToast(completedTopics.has(key) ? 'Topic marked complete.' : 'Topic removed from completed.');
	}
});
searchInput.addEventListener('input', () => {
	searchQuery = searchInput.value.trim().toLowerCase();
	render();
});
document.addEventListener('keydown', event => {
	if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
		event.preventDefault();
		searchInput.focus();
	}
	if (event.key === 'Escape' && selectedTopic) {
		selectedTopic = null;
		showEmptyLesson();
	}
});

render();
