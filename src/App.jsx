
import { useState } from 'react'
import './App.css'
import { recommendDiet } from './utils/dietRules'

function getMealImage(mealName) {
  const query = encodeURIComponent(mealName + ' Indian food')
  return 'https://loremflickr.com/600/400/' + query
}

function MealCard({ type, emoji, title }) {
  const [imageError, setImageError] = useState(false)

  return (
    <article className="meal-card">
      {!imageError ? (
        <img
          className="meal-image"
          src={getMealImage(title)}
          alt={title}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="meal-image image-fallback">
          <span>{emoji}</span>
          <p>Image unavailable</p>
        </div>
      )}

      <div className="meal-content">
        <p className="meal-type">
          <span>{emoji}</span> {type}
        </p>
        <h3>{title}</h3>
      </div>
    </article>
  )
}

function App() {
  const [food, setFood] = useState('Vegetarian')
  const [activity, setActivity] = useState('Moderate')
  const [goal, setGoal] = useState('Balanced Eating')
  const [plan, setPlan] = useState(null)
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    try {
      const result = recommendDiet(food, activity, goal)

      if (!result || !result.weeklyPlan) {
        setError('Unable to generate the diet plan. Please check dietRules.js.')
        setPlan(null)
        return
      }

      setPlan(result)
      setError('')

      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({
          behavior: 'smooth',
        })
      }, 100)
    } catch (err) {
      console.error(err)
      setError('Diet plan could not be generated. Please check the console.')
      setPlan(null)
    }
  }

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">
          <span className="logo-icon">🥗</span>
          NutriGuide
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#planner">Diet Planner</a>
          <a href="#how-it-works">How It Works</a>
        </nav>

        <a className="nav-button" href="#planner">
          Get Started
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              YOUR PERSONAL NUTRITION COMPANION
            </span>

            <h1>
              Eat Better.
              <br />
              <span>Live Healthier.</span>
            </h1>

            <p>
              Discover a weekly meal plan tailored to your food
              preferences, activity level, and health goals.
            </p>

            <a className="primary-button" href="#planner">
              Create My Diet Plan <span>→</span>
            </a>

            <div className="hero-features">
              <span>✓ Personalized meals</span>
              <span>✓ 7-day plan</span>
              <span>✓ Your food preferences</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <img
                src="/images/hero-food.png"
                alt="Healthy food bowl"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />

              <div className="hero-image-overlay">
                <span>🥑</span>
                <div>
                  <strong>Healthy choices</strong>
                  <p>One meal at a time</p>
                </div>
              </div>
            </div>

            <div className="floating-card">
              <span>🌿</span>
              <div>
                <strong>Made for you</strong>
                <p>Your food. Your goals.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="planner-section" id="planner">
          <div className="section-heading">
            <span className="eyebrow">LET'S GET STARTED</span>
            <h2>Your Personalized Diet Planner</h2>
            <p>
              Tell us about your preferences to generate your
              personalized weekly meal plan.
            </p>
          </div>

          <form className="planner-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="food">🥗 Food Preference</label>
              <select
                id="food"
                value={food}
                onChange={(event) => setFood(event.target.value)}
              >
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-vegetarian">Non-vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="activity">🏃 Activity Level</label>
              <select
                id="activity"
                value={activity}
                onChange={(event) => setActivity(event.target.value)}
              >
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="goal">🎯 Health Goal</label>
              <select
                id="goal"
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
              >
                <option value="Balanced Eating">Balanced Eating</option>
                <option value="More Protein">More Protein</option>
                <option value="More Fibre">More Fibre</option>
              </select>
            </div>

            <button className="primary-button submit-button" type="submit">
              Generate My Diet Plan <span>→</span>
            </button>

            {error && <p className="error-message">{error}</p>}
          </form>
        </section>

        {plan && (
          <section className="results-section" id="results">
            <div className="section-heading">
              <span className="eyebrow">YOUR RESULTS</span>
              <h2>Your 7-Day Meal Plan</h2>
              <p>
                {food} · {activity} activity · {goal}
              </p>
            </div>

            {plan.activityAdvice && (
              <div className="advice-card">
                <span>💡</span>
                <div>
                  <h3>Activity Advice</h3>
                  <p>{plan.activityAdvice}</p>
                </div>
              </div>
            )}

            <div className="weekly-plan">
              {plan.weeklyPlan.map((dayPlan, index) => (
                <article
                  className="day-section"
                  key={dayPlan.day || index}
                >
                  <div className="day-heading">
                    <span className="day-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{dayPlan.day || `Day ${index + 1}`}</h3>
                  </div>

                  <div className="meal-grid">
                    <MealCard
                      type="Breakfast"
                      emoji="🌅"
                      title={dayPlan.breakfast}
                    />

                    <MealCard
                      type="Lunch"
                      emoji="☀️"
                      title={dayPlan.lunch}
                    />

                    <MealCard
                      type="Dinner"
                      emoji="🌙"
                      title={dayPlan.dinner}
                    />
                  </div>
                </article>
              ))}
            </div>

            {plan.explanations && (
              <div className="advice-card explanation-card">
                <span>📋</span>
                <div>
                  <h3>Why This Plan?</h3>
                  {Array.isArray(plan.explanations) ? (
                    <ul>
                      {plan.explanations.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{plan.explanations}</p>
                  )}
                </div>
              </div>
            )}

            <button
              className="secondary-button"
              onClick={() => {
                setPlan(null)
                document.getElementById('planner')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              Create Another Plan
            </button>
          </section>
        )}

        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <span className="eyebrow">SIMPLE AND PERSONALIZED</span>
            <h2>How NutriGuide Works</h2>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-icon">🥦</span>
              <h3>01. Choose Your Food</h3>
              <p>
                Select vegetarian, non-vegetarian, or vegan meals.
              </p>
            </article>

            <article className="step-card">
              <span className="step-icon">🎯</span>
              <h3>02. Set Your Goal</h3>
              <p>Choose your health goal and activity level.</p>
            </article>

            <article className="step-card">
              <span className="step-icon">🍽️</span>
              <h3>03. Get Your Plan</h3>
              <p>
                Explore breakfast, lunch, and dinner for seven days.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          <span className="logo-icon">🥗</span>
          NutriGuide
        </a>

        <p>Make healthier choices, one meal at a time.</p>

        <p className="footer-note">
          General meal suggestions only. Consult a qualified nutrition
          professional for individual dietary needs.
        </p>
      </footer>
    </div>
  )
}

export default App
