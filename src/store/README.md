# Redux Store مع Redux Persist

## 📚 نظرة عامة

هذا المشروع يستخدم **Redux Toolkit** مع **Redux Persist** لإدارة الحالة العامة مع القدرة على حفظ البيانات في التخزين المحلي (localStorage).

## 🎯 ما هو Redux Persist؟

Redux Persist هو مكتبة تسمح بحفظ حالة Redux تلقائياً في التخزين المحلي، مما يعني:
- ✅ **حفظ البيانات تلقائياً** - لا تفقد البيانات عند إعادة تحميل الصفحة
- ✅ **استمرارية الجلسة** - المستخدم يستمر من حيث توقف
- ✅ **تحسين تجربة المستخدم** - لا حاجة لإدخال البيانات مرة أخرى

## 📦 الأقسام المحفوظة (Persisted Slices)

### 1. `preferencesSlice` - تفضيلات المستخدم
```javascript
{
  language: 'ar',      
  theme: 'light',         
  direction: 'rtl',       
  fontSize: 'medium',     
  notifications: true     
}
```

**الاستخدام:**
```javascript
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage, setTheme, toggleTheme } from './slices/preferencesSlice'


const { language, theme } = useSelector((state) => state.preferences)
const dispatch = useDispatch()


dispatch(setLanguage('en'))


dispatch(toggleTheme())
```

### 2. `contactSlice` - نموذج التواصل
```javascript
{
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  },
  errors: {},
  isSubmitting: false,
  submitStatus: null,
  submitMessage: ''
}
```

**الاستخدام:**
```javascript
import { useSelector, useDispatch } from 'react-redux'
import { updateField, submitContactForm } from './slices/contactSlice'

// في المكون
const { formData, errors } = useSelector((state) => state.contact)
const dispatch = useDispatch()

// تحديث حقل
dispatch(updateField({ field: 'firstName', value: 'أحمد' }))


dispatch(submitContactForm(formData))
```

### 3. `navigationSlice` - حالة التنقل
```javascript
{
  activeSection: 'hero'   
}
```

**الاستخدام:**
```javascript
import { useSelector, useDispatch } from 'react-redux'
import { setActiveSection } from './slices/navigationSlice'

// في المكون
const { activeSection } = useSelector((state) => state.navigation)
const dispatch = useDispatch()

// تحديث القسم النشط
dispatch(setActiveSection('services'))
```

### 4. `uiSlice` - حالة واجهة المستخدم (غير محفوظ)
```javascript
{
  isLoading: false,
  modalOpen: false
}
```

> **ملاحظة:** هذا القسم **غير محفوظ** في localStorage (في القائمة السوداء `blacklist`)

## 🔧 التكوين

### في `src/store/index.js`:
```javascript
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contact', 'navigation', 'preferences'], // الأقسام المحفوظة
  blacklist: ['ui'], // الأقسام غير المحفوظة
}
```

### في `src/main.jsx`:
```javascript
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

<Provider store={store}>
  <PersistGate loading={<LoadingScreen />} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
```

## 🎨 المكونات المتوفرة

### 1. مكونات الإعدادات:
- `UserSettings` - قائمة الإعدادات الشاملة
- `LanguageSwitcher` - تبديل اللغة
- `DarkModeToggle` - تبديل الوضع المظلم/الفاتح
- `FontSizeSelector` - اختيار حجم الخط
- `NotificationsToggle` - تفعيل/إيقاف الإشعارات

### 2. مكونات إضافية:
- `ThemeProvider` - مزود الثيم الديناميكي
- `LoadingScreen` - شاشة التحميل
- `PreferencesPanel` - لوحة الإعدادات الكاملة

## 📖 أمثلة الاستخدام

### مثال 1: تغيير اللغة
```javascript
import { useDispatch } from 'react-redux'
import { setLanguage } from './store/slices/preferencesSlice'

const dispatch = useDispatch()

// تغيير إلى العربية
dispatch(setLanguage('ar'))

// تغيير إلى الإنجليزية
dispatch(setLanguage('en'))
```

### مثال 2: تبديل الوضع المظلم
```javascript
import { useDispatch } from 'react-redux'
import { toggleTheme } from './store/slices/preferencesSlice'

const dispatch = useDispatch()

// تبديل بين الوضع المظلم والفاتح
dispatch(toggleTheme())
```

### مثال 3: حفظ بيانات النموذج
```javascript
import { useSelector, useDispatch } from 'react-redux'
import { updateField } from './store/slices/contactSlice'

const { formData } = useSelector((state) => state.contact)
const dispatch = useDispatch()

// عند كتابة في حقل الاسم
const handleChange = (e) => {
  dispatch(updateField({ field: 'firstName', value: e.target.value }))
}

// البيانات محفوظة تلقائياً في localStorage!
```

## 🗑️ مسح البيانات المحفوظة

إذا كنت تريد مسح البيانات المحفوظة:

```javascript
// في Developer Tools Console
localStorage.clear()

// أو استخدام Redux Persist API
import { persistor } from './store'
persistor.purge() // مسح كل البيانات المحفوظة
```

## 🎯 الفوائد الرئيسية

1. **حفظ تلقائي** - كل تغيير يُحفظ فوراً
2. **استمرارية** - المستخدم يستمر من حيث توقف
3. **تحسين UX** - تجربة مستخدم أفضل
4. **سهولة الاستخدام** - مثل Redux العادي تماماً
5. **مرونة** - اختيار ما يُحفظ وما لا يُحفظ

## 🔍 التصحيح (Debugging)

لمشاهدة البيانات المحفوظة:

```javascript
// في Developer Tools Console
console.log(localStorage.getItem('persist:root'))

// أو استخدام Redux DevTools Extension
// لرؤية الحالة الكاملة في الوقت الفعلي
```

## 📝 ملاحظات

- البيانات المحفوظة في `localStorage` لها حد أقصى (~5-10 MB حسب المتصفح)
- لا تحفظ بيانات حساسة (كلمات المرور، tokens) في Redux Persist
- استخدم `sessionStorage` بدلاً من `localStorage` للبيانات المؤقتة

## 🚀 التطوير المستقبلي

يمكن إضافة:
- ✅ حفظ سجل التصفح
- ✅ حفظ المفضلة
- ✅ حفظ إعدادات الفلترة والبحث
- ✅ حفظ حالة السلة (Shopping Cart)
- ✅ حفظ تقدم المستخدم (Progress)
